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

  mostrarSidebar = false;
  esPantallaPequena = false;
  mostrarDialogo = false;
  mostrarDialogoCerrar = false;
  opcion = '';
  direccion = 'Cargando ubicación...';

  constructor(private router: Router) {}

  ngOnInit() {
  this.verificarPantalla();
  window.addEventListener('resize', this.verificarPantalla.bind(this));
  }

  verificarPantalla() {
  this.esPantallaPequena = window.innerWidth < 768;
  if (!this.esPantallaPequena) this.mostrarSidebar = true;
  }

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

  toggleSidebar() {
  this.mostrarSidebar = !this.mostrarSidebar;
}

}
