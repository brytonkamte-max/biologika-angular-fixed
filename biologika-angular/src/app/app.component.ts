import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from './services/navigation.service';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModalComponent } from './components/modals/auth-modal/auth-modal.component';
import { CartModalComponent } from './components/modals/cart-modal/cart-modal.component';
import { AdModalComponent } from './components/modals/ad-modal/ad-modal.component';
import { LotteryInfoModalComponent } from './components/modals/lottery-modal/lottery-info-modal.component';
import { LotteryInviteModalComponent } from './components/modals/lottery-modal/lottery-invite-modal.component';
import { GameModalComponent } from './components/modals/game-modal/game-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ProductsComponent,
    DashboardComponent,
    AdminComponent,
    FooterComponent,
    AuthModalComponent,
    CartModalComponent,
    AdModalComponent,
    LotteryInfoModalComponent,
    LotteryInviteModalComponent,
    GameModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  nav = inject(NavigationService);

  showAuthModal = signal(false);
  showCartModal = signal(false);
  showAdModal = signal(false);
  showLotteryInfoModal = signal(false);
  showLotteryInviteModal = signal(false);
  showGameModal = signal(false);

  ngOnInit() {
    // Show ad popup on load after 800ms
    setTimeout(() => this.showAdModal.set(true), 800);
  }

  onAdClosed() {
    this.showAdModal.set(false);
    // Show lottery info after ad
    setTimeout(() => this.showLotteryInfoModal.set(true), 500);
  }

  onAdGoToProducts() {
    this.nav.navigate('home');
  }

  onCheckoutDone(total: number) {
    if (total >= 70) {
      setTimeout(() => this.showLotteryInviteModal.set(true), 300);
    }
  }

  onPlayLottery() {
    this.showLotteryInviteModal.set(false);
    this.showGameModal.set(true);
  }

  openCart() {
    this.showCartModal.set(true);
  }
}
