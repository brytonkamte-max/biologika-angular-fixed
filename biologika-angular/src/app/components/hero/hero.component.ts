import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

interface Slide {
  bgClass: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  auth = inject(AuthService);

  slides: Slide[] = [
    {
      bgClass: 'slide-0',
      title: 'Dalla Terra alla tua Tavola',
      subtitle: '70% di frutta bio italiana. Nessun conservante, solo il sapore autentico della tradizione contadina.'
    },
    {
      bgClass: 'slide-1',
      title: 'Coltiviamo Qualità, Serviamo Emozioni',
      subtitle: 'Prima spremitura a freddo. Dalle nostre olive alla tua tavola, per un gusto inconfondibile.'
    }
  ];

  currentSlide = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.timer = setInterval(() => this.nextSlide(), 6000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => this.nextSlide(), 6000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
