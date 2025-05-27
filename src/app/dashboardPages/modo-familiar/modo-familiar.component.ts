import { AfterViewInit, Component } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modo-familiar',
  imports: [HttpClientModule],
  templateUrl: './modo-familiar.component.html',
  styleUrl: './modo-familiar.component.css'
})
export class ModoFamiliarComponent implements AfterViewInit {

 private map!: mapboxgl.Map;
  private accessToken = 'pk.eyJ1IjoiYW5kcmVzb2plZGEyMCIsImEiOiJjbWFpZGloOWIwbmF4MnFvY3RwMWFqdnBsIn0.Ap1NaGLQzmyX9UXAG_rm3A';

  constructor(private http: HttpClient) {
    (mapboxgl as any).accessToken = this.accessToken;
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-74.007, 5.025] as LngLatLike,
      zoom: 15,
    });

const rawCoordinates: [number, number][] = [
  [-74.0120, 5.0272],
  [-74.0115, 5.0270],
  [-74.0110, 5.0268],
  [-74.0106, 5.0267],
  [-74.0102, 5.0265],
  [-74.0098, 5.0262],
  [-74.0094, 5.0260],
  [-74.0090, 5.0256],
  [-74.0086, 5.0253],
  [-74.0082, 5.0250],
  [-74.0078, 5.0247],
  [-74.0074, 5.0244],
  [-74.0070, 5.0242],
  [-74.0066, 5.0238],
  [-74.0063, 5.0236],
  [-74.0060, 5.0235],
  [-74.0058, 5.0234],
  [-74.0056, 5.0233],
  [-74.0054, 5.02328],
  [-74.0052, 5.02325],
  [-74.0051, 5.02323],
  [-74.0050, 5.0232],
];



    this.map.on('load', () => {
      const coordString = rawCoordinates.map(c => `${c[0]},${c[1]}`).join(';');
      const url = `https://api.mapbox.com/matching/v5/mapbox/walking/${coordString}.json?access_token=${this.accessToken}&geometries=geojson`;

      this.http.get<any>(url).subscribe(response => {
        const matchedCoords = response.matchings[0].geometry.coordinates as [number, number][];
        this.addRouteAndAnimate(matchedCoords);
      });
    });
  }

  private addRouteAndAnimate(routeCoordinates: [number, number][]): void {
    this.map.addSource('route', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: routeCoordinates,
        },
      },
    });

    this.map.addLayer({
      id: 'route-line',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#1e90ff',
        'line-width': 4,
      },
    });

    const marker = new mapboxgl.Marker({ color: '#1e90ff' })
      .setLngLat(routeCoordinates[0])
      .addTo(this.map);

    const totalDuration = 360000; // 3 minutos
    const steps = 1600;
    const interval = totalDuration / steps;

    let currentStep = 0;

    const interpolate = (start: number[], end: number[], t: number): [number, number] => [
      start[0] + (end[0] - start[0]) * t,
      start[1] + (end[1] - start[1]) * t,
    ];

    const animateMarker = () => {
      const segmentLength = 1 / (routeCoordinates.length - 1);
      const progress = currentStep / steps;
      const segmentIndex = Math.floor(progress / segmentLength);
      const t = (progress % segmentLength) / segmentLength;

      if (segmentIndex >= routeCoordinates.length - 1) return;

      const start = routeCoordinates[segmentIndex];
      const end = routeCoordinates[segmentIndex + 1];
      const interpolated = interpolate(start, end, t);

      marker.setLngLat(interpolated);
      this.map.panTo(interpolated);

      currentStep++;
      if (currentStep <= steps) {
        requestAnimationFrame(animateMarker);
      } else {
        marker.setPopup(
          new mapboxgl.Popup().setHTML('<strong>Clara Gómez</strong><br>Destino alcanzado')
        ).togglePopup();
      }
    };

    animateMarker();
  }
}