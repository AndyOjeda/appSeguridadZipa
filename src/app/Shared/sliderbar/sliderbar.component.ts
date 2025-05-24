import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siderbar',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './sliderbar.component.html',
  styleUrl: './sliderbar.component.css'
})
export class SliderbarComponent {

 mostrarDialogo = false;
 mostrarDialogoCerrar = false;
  opcion = '';
  direccion = 'Cargando ubicación...';

  constructor(private router: Router) {}

  abrirDialogoEmergencia() {
    this.mostrarDialogo = true;

    // Obtener ubicación
    navigator.geolocation.getCurrentPosition((pos) => {
      this.direccion = `Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`;
    }, () => {
      this.direccion = 'No se pudo obtener la ubicación';
    });
  }

  cerrarDialogo() {
    this.mostrarDialogo = false;
  }

  contactar() {
    alert(`Contactando a ${this.opcion.toUpperCase()} en ${this.direccion}`);
    this.cerrarDialogo();
  }

  abrirDialogoCerrar(){
    this.mostrarDialogoCerrar = true;
  }

  cerrarDialogoCerrar() {
    this.mostrarDialogoCerrar = false;
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
  }

}
