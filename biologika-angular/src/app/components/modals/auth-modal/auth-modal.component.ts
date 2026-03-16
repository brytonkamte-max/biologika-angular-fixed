import { Component, inject, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent {
  auth = inject(AuthService);
  close = output<void>();

  activeTab: 'login' | 'register' = 'login';

  // Login fields
  loginEmail = '';
  loginPassword = '';

  // Register fields
  regName = '';
  regEmail = '';
  regPassword = '';
  regPhone = '';
  regAddress = '';
  regCity = '';
  regZip = '';
  regMarketing = false;
  regTerms = false;

  onLogin() {
    const result = this.auth.login(this.loginEmail, this.loginPassword);
    if (result.success) {
      alert(result.message);
      this.close.emit();
    } else {
      alert(result.message);
    }
  }

  onRegister() {
    if (!this.regTerms) {
      alert('⚠️ Devi accettare i termini e condizioni.');
      return;
    }
    const result = this.auth.register({
      name: this.regName,
      email: this.regEmail,
      password: this.regPassword,
      phone: this.regPhone,
      address: this.regAddress,
      city: this.regCity,
      zip: this.regZip,
      marketingConsent: this.regMarketing
    });
    if (result.success) {
      alert(result.message);
      this.close.emit();
    } else {
      alert(result.message);
    }
  }

  onOverlayClick() {
    this.close.emit();
  }
}
