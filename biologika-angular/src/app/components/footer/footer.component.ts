import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="main-footer">
      <div class="footer-container">
        <div class="footer-col">
          <h2 class="footer-logo">Biologika.</h2>
          <p>Coltiviamo il futuro rispettando le radici del passato. Qualità, etica e trasparenza in ogni seme.</p>
        </div>
        <div class="footer-col">
          <h4>Link Rapidi</h4>
          <ul class="footer-links">
            <li><a href="#">Chi Siamo</a></li>
            <li><a href="#">Sostenibilità</a></li>
            <li><a href="#">Certificazioni</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contatti</h4>
          <p class="footer-contact">
            Via della Terra 1, Italia<br>
            Email: info&#64;biologika.it<br>
            Tel: +39 012 3456XX
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        © 2026 Biologika – Progetto Generation JAVA 151
      </div>
    </footer>
  `
})
export class FooterComponent {}
