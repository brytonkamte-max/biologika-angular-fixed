import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { NavigationService } from '../../services/navigation.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  auth = inject(AuthService);
  cart = inject(CartService);
  nav = inject(NavigationService);

  get userOrders(): Order[] {
    const user = this.auth.currentUser();
    if (!user) return [];
    return this.cart.getOrdersByUser(user.id);
  }

  updateMarketing(checked: boolean) {
    this.auth.updateMarketingConsent(checked);
    alert(checked
      ? '✅ Perfetto! Riceverai le nostre offerte esclusive via email 📧'
      : '✓ Preferenze aggiornate correttamente');
  }

  editProfile() {
    alert('🛠️ Funzionalità di modifica profilo in sviluppo!');
  }

  logout() {
    this.auth.logout();
    this.nav.navigate('home');
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('it-IT', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }
}
