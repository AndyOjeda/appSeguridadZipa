import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soporte',
  imports: [CommonModule],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.css'
})
export class SoporteComponent {

   articles = [
    {
      title: '¿Cómo reportar un robo en Zipaquirá?',
      content: 'Puedes comunicarte con la Policía Nacional al 123 o dirigirte al CAI más cercano. También puedes usar la aplicación oficial de la alcaldía para reportes rápidos.',
      open: false
    },
    {
      title: 'Mapa de cámaras de vigilancia en la ciudad',
      content: 'Consulta el mapa interactivo con la ubicación de las cámaras públicas activas en zonas estratégicas de Zipaquirá.',
      open: false
    },
    {
      title: 'Consejos para prevenir robos en el transporte público',
      content: 'Evita mostrar objetos de valor, mantente alerta y reporta comportamientos sospechosos a las autoridades.',
      open: false
    },
    {
      title: 'Horarios y ubicación de CAI activos',
      content: 'Revisa los horarios de atención y la ubicación de los Centros de Atención Inmediata (CAI) más cercanos.',
      open: false
    },
    {
      title: '¿Qué hacer si eres víctima de violencia doméstica?',
      content: 'Llama a la línea 155 para recibir orientación. También puedes acudir a la Comisaría de Familia o contactar organizaciones de apoyo local.',
      open: false
    },
    {
      title: 'Cómo formar parte de la red de seguridad barrial',
      content: 'Acércate a tu junta de acción comunal y únete a grupos vecinales que trabajan en conjunto con la policía para mejorar la seguridad.',
      open: false
    }
  ];

  toggleArticle(article: any) {
    article.open = !article.open;
  }
}