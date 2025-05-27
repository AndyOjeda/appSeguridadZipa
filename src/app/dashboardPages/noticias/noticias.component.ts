import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

 newsArticles = [
    {
      image: 'assets/img/zipa1.jpg',
      category: 'Seguridad',
      title: 'Nuevo centro de monitoreo en Zipaquirá refuerza vigilancia 24/7',
      summary: 'La Alcaldía inaugura un moderno centro con inteligencia artificial para monitorear los barrios más vulnerables.',
      author: 'Dra. Lina Torres',
      authorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
      date: '26 May 2025'
    },
    {
      image: 'assets/img/zipa2.png',
      category: 'Policía',
      title: 'Capturado ladrón de motocicletas en San Rafael',
      summary: 'Gracias al sistema de cámaras de seguridad, fue detenido un sujeto involucrado en varios robos en la zona industrial.',
      author: 'Cr. Óscar Peña',
      authorImage: 'https://randomuser.me/api/portraits/men/54.jpg',
      date: '25 May 2025'
    },
    {
      image: 'assets/img/zipa3.jpg',
      category: 'Emergencia',
      title: 'Simulacro de evacuación masiva en colegios de Zipaquirá',
      summary: 'Más de 3.000 estudiantes participaron en el ejercicio liderado por Defensa Civil y bomberos.',
      author: 'María Ocampo',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: '24 May 2025'
    },
    {
      image: 'assets/img/zipa4.jpg',
      category: 'Tecnología',
      title: 'Se instala red de sensores en el Parque La Esperanza',
      summary: 'Los sensores permiten detectar movimientos sospechosos y alertan a la Policía local.',
      author: 'Ing. Jhon Ramírez',
      authorImage: 'https://randomuser.me/api/portraits/men/12.jpg',
      date: '23 May 2025'
    },
    {
      image: 'assets/img/zipa5.jpg',
      category: 'Salud',
      title: 'Campaña de salud mental para oficiales de seguridad',
      summary: 'La Secretaría de Salud lanza programa de atención emocional para prevenir el agotamiento en agentes.',
      author: 'Psic. Diana Lizarazo',
      authorImage: 'https://randomuser.me/api/portraits/women/21.jpg',
      date: '23 May 2025'
    },
    {
      image: 'assets/img/zipa6.jpg',
      category: 'Infraestructura',
      title: 'Nuevas luminarias LED en la ciclovía de Zipaquirá',
      summary: 'Las luces inteligentes se encienden por movimiento y mejoran la seguridad nocturna.',
      author: 'Carlos Bernal',
      authorImage: 'https://randomuser.me/api/portraits/men/36.jpg',
      date: '22 May 2025'
    }
  ];
}