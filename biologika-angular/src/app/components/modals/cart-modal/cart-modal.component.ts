import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  cart = inject(CartService);
  auth = inject(AuthService);

  close = output<void>();
  checkoutDone = output<number>(); // emits total

  get total(): number {
    const sub = this.cart.subtotal();
    const user = this.auth.currentUser();
    return user?.firstOrder ? sub * 0.95 : sub;
  }

  get hasFirstOrderDiscount(): boolean {
    return this.auth.currentUser()?.firstOrder === true;
  }

  removeItem(id: number) {
    this.cart.removeFromCart(id);
  }

  checkout() {
    if (!this.auth.isLoggedIn() || this.auth.isAdmin()) {
      alert('⚠️ Effettua il login per completare l\'ordine!');
      return;
    }
    const user = this.auth.currentUser()!;
    const order = this.cart.checkout(user.id, !!user.firstOrder);

    if (user.firstOrder) {
      this.auth.markFirstOrderUsed();
    }

    if (user.marketingConsent) {
      console.log('📧 Email conferma ordine inviata a:', user.email);
    }

    this.close.emit();
    alert(`🎉 Ordine completato con successo!\n\n📦 Ordine #${order.id}\n💰 Totale: € ${order.total.toFixed(2)}\n\nRiceverai una conferma via email a ${user.email}.\nI tuoi prodotti biologici arriveranno entro 3-5 giorni lavorativi!`);

    if (order.total >= 70) {
      this.checkoutDone.emit(order.total);
    }
  }
}
