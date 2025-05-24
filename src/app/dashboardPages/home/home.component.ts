import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import mapboxgl from 'mapbox-gl';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ChartModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('trendChart') trendChart!: ElementRef;

  percentageChange = -15; // Para el badge

  chartData = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [4, 5, 3, 6, 5, 7, 6],
        backgroundColor: "#10b981",
        borderRadius: 3,
        barThickness: 5
      }
    ]
  };

  chartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    },
    responsive: false,
    maintainAspectRatio: false
  };

  doughnutOptions = {
    cutout: '40%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.raw}`;
          }
        }
      }
    }
  };

  combinedDoughnutData = {
    labels: ['Críticos', 'Sospechosos', 'Estables'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#ef4444', '#facc15', '#4ade80'],
        hoverBackgroundColor: ['#f87171', '#fde047', '#86efac']
      }
    ]
  };

  ngAfterViewInit(): void {
    // MAPA
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVzb2plZGEyMCIsImEiOiJjbWFpZGloOWIwbmF4MnFvY3RwMWFqdnBsIn0.Ap1NaGLQzmyX9UXAG_rm3A';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-74.027, 5.022],
      zoom: 13
    });

    const puntos = [
      { lng: -74.030, lat: 5.025, label: 'Robo' },
      { lng: -74.023, lat: 5.020, label: 'Asalto' },
      { lng: -74.027, lat: 5.017, label: 'Vandalismo' }
    ];

    puntos.forEach(punto => {
      new mapboxgl.Marker({ color: 'red' })
        .setLngLat([punto.lng, punto.lat])
        .setPopup(new mapboxgl.Popup().setText(punto.label))
        .addTo(map);
    });

    // GRÁFICO TIPO LINEA (SPARKLINE)
   const canvas = this.trendChart?.nativeElement;
if (canvas) {
  const ctx = canvas.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Tendencia',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 5
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        },
        elements: {
          line: { borderWidth: 2 },
          point: { backgroundColor: 'rgba(75, 192, 192, 1)' }
        }
      }
    });
  }
}
  }
}
