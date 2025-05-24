import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asistente-virtual',
  imports: [FormsModule, CommonModule],
  templateUrl: './asistente-virtual.component.html',
  styleUrl: './asistente-virtual.component.css'
})
export class AsistenteVirtualComponent implements OnInit {

 messages: any[] = [];
  userInput = '';

  ngOnInit() {
    this.addBotMessage('Hola, soy tu asistente de seguridad de Zipaquirá. ¿En qué puedo ayudarte?', [
      '📞 Números de emergencia',
      '🚨 ¿Qué hacer ante un robo?',
      '🔥 Contactar a bomberos',
      '👮‍♂️ Consejos de seguridad',
    ]);
  }

  addBotMessage(text: string, options?: string[]) {
    this.messages.push({
      from: 'bot',
      type: options ? 'options' : 'text',
      text,
      options
    });
  }

  addUserMessage(text: string) {
    this.messages.push({
      from: 'user',
      type: 'text',
      text
    });
  }

  handleOption(option: string) {
    this.addUserMessage(option);
    this.respondToOption(option);
  }

  respondToOption(option: string) {
    switch (option) {
      case '📞 Números de emergencia':
        this.addBotMessage(
          '📱 Aquí tienes los principales números:\n\n' +
          '🚔 Policía: 123 o 314 358 7215\n' +
          '🚒 Bomberos: 119 o 314 229 6760\n' +
          '🚑 Ambulancia: 125\n' +
          '📍 Línea Zipaquirá Conecta: 01 8000 123 456'
        );
        break;

      case '🚨 ¿Qué hacer ante un robo?':
        this.addBotMessage(
          '1️⃣ Mantén la calma\n' +
          '2️⃣ No enfrentes al ladrón\n' +
          '3️⃣ Observa rasgos físicos y huida\n' +
          '4️⃣ Llama inmediatamente a la Policía: 123\n' +
          '5️⃣ Reporta en la app o línea Zipaquirá Conecta'
        );
        break;

      case '🔥 Contactar a bomberos':
        this.addBotMessage('Llamando a bomberos de Zipaquirá...\n📞 Marca 119 o 314 229 6760');
        break;

      case '👮‍♂️ Consejos de seguridad':
        this.addBotMessage(
          '✅ Revisa cerraduras y puertas\n' +
          '✅ No compartas datos personales en redes\n' +
          '✅ Usa rutas seguras y bien iluminadas\n' +
          '✅ Reporta personas sospechosas a la línea 123'
        );
        break;

      default:
        this.addBotMessage('Lo siento, no entendí tu solicitud.');
    }
  }

  sendMessage() {
    if (!this.userInput.trim()) return;
    this.addUserMessage(this.userInput);
    this.addBotMessage('Estoy procesando tu mensaje...');
    this.userInput = '';
  }
}
