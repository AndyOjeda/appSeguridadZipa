import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    // Aquí puedes implementar lógica real de autenticación
    this.router.navigate(['/dashboard']);
  }

  forgotPassword() {
    alert('Funcionalidad de recuperación de contraseña no implementada');
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
