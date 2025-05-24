import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email = '';
  password = '';
  confirmPassword = ''

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    // Aquí puedes implementar lógica real de autenticación
    alert(`Inicio de sesión exitoso: ${this.email}`);
    // this.router.navigate(['/dashboard']);
  }

  forgotPassword() {
    alert('Funcionalidad de recuperación de contraseña no implementada');
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

