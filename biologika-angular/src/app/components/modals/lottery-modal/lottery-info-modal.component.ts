import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lottery-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ad-modal-overlay" (click)="close.emit()">
      <div class="ad-box" (click)="$event.stopPropagation()">
        <button class="ad-close" (click)="close.emit()">×</button>
        <h3 class="ad-title">🎟️ LOTTERIA BIOLOGIKA</h3>
        <p class="ad-desc" style="margin-bottom:12px;">
          Con una spesa di <strong>almeno 70€</strong> hai la possibilità di partecipare a un
          <strong>gioco di lotteria</strong> e provare a vincere uno <strong>sconto sul prossimo ordine</strong>.
        </p>
        <ul class="lottery-list">
          <li>🎁 Possibili premi: <strong>10%</strong>, <strong>15%</strong>, <strong>20%</strong></li>
          <li>🃏 Giochi con il <strong>gioco delle 3 carte</strong></li>
          <li>✅ 1 tentativo per ordine</li>
        </ul>
        <button class="ad-btn" (click)="close.emit()">← Esci</button>
      </div>
    </div>
  `
})
export class LotteryInfoModalComponent {
  close = output<void>();
}
