import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lottery-invite-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ad-modal-overlay" (click)="close.emit()">
      <div class="ad-box" (click)="$event.stopPropagation()">
        <button class="ad-close" (click)="close.emit()">×</button>
        <div class="ad-badge">LOTTERIA BIOLOGIKA</div>
        <h3 class="ad-title">🎉 Complimenti! Hai sbloccato la lotteria</h3>
        <p class="ad-desc" style="margin-bottom:12px;">
          Con una spesa di <strong>almeno 70€</strong> hai la possibilità di partecipare a un
          <strong>gioco di lotteria</strong> e provare a vincere uno <strong>sconto sul prossimo ordine</strong>.
        </p>
        <ul class="lottery-list">
          <li>🎁 Premi possibili: <strong>10%</strong>, <strong>15%</strong>, <strong>20%</strong></li>
          <li>🃏 Giochi con il <strong>gioco delle 3 carte</strong></li>
          <li>✅ 1 tentativo per ordine</li>
        </ul>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <button class="ad-btn" (click)="play.emit()">🎮 Gioca ora</button>
          <button class="btn btn-secondary" style="padding:12px 18px; border-radius:999px; border:none; cursor:pointer; font-weight:700;" (click)="close.emit()">Non ora</button>
        </div>
      </div>
    </div>
  `
})
export class LotteryInviteModalComponent {
  close = output<void>();
  play = output<void>();
}
