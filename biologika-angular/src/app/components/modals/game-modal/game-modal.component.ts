import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reward {
  title: string;
  sub: string;
  code: string;
}

@Component({
  selector: 'app-game-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-modal.component.html',
  styleUrl: './game-modal.component.css'
})
export class GameModalComponent {
  close = output<void>();

  rewards: Reward[] = [];
  flipped: boolean[] = [false, false, false];
  picked = false;
  result: Reward | null = null;

  constructor() {
    this.initGame();
  }

  initGame() {
    const win10: Reward = { title: '🎉 Hai vinto 10%!', sub: 'Codice sconto: BIO10', code: 'BIO10' };
    const win15: Reward = { title: '🎉 Hai vinto 15%!', sub: 'Codice sconto: BIO15', code: 'BIO15' };
    const win20: Reward = { title: '🎉 Hai vinto 20%!', sub: 'Codice sconto: BIO20', code: 'BIO20' };
    const lose1: Reward = { title: '😅 Niente sconto', sub: 'Riprova al prossimo ordine!', code: '' };
    const lose2: Reward = { title: '🙂 Quasi!', sub: 'Questa volta non hai vinto.', code: '' };

    const win = [win10, win15, win20][Math.floor(Math.random() * 3)];
    this.rewards = [win, lose1, lose2].sort(() => Math.random() - 0.5);
    this.flipped = [false, false, false];
    this.picked = false;
    this.result = null;
  }

  pickCard(i: number) {
    if (this.picked) return;
    this.picked = true;
    this.flipped = this.flipped.map((_, idx) => idx === i);
    this.result = this.rewards[i];

    if (this.result.code) {
      localStorage.setItem('biologika_coupon', this.result.code);
    }
  }
}
