import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {

 fullName = 'Julián Pérez';
  email = 'julianperez@correo.com';
  phone = '(601) 855-3241';
  location = 'Zipaquirá, Cundinamarca';

  bio = `👋 Hola, soy Julián, desarrollador web apasionado por la tecnología y el diseño de interfaces intuitivas. Me especializo en construir aplicaciones modernas utilizando Angular y frameworks de backend como Spring Boot. Vivo en Zipaquirá y disfruto creando soluciones que mejoran la experiencia del usuario.`;

  editingLocation = false;
  editingBio = false;

  editSection(section: string) {
    if (section === 'bio') this.editingBio = true;
  }

  saveLocation() {
    this.editingLocation = false;
    // Aquí podrías guardar la ubicación en el backend
  }

  saveBio() {
    this.editingBio = false;
    // Aquí podrías guardar la bio en el backend
  }
}
