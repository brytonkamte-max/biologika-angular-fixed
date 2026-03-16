import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService = inject(ProductService);
  cart = inject(CartService);
  auth = inject(AuthService);

  openAuth = output<void>();

  products = this.productService.getAll();
  addingId: number | null = null;

  addToCart(product: Product) {
    if (!this.auth.isLoggedIn() || this.auth.isAdmin()) {
      alert('⚠️ Effettua il login come cliente per aggiungere prodotti al carrello!');
      this.openAuth.emit();
      return;
    }
    this.cart.addToCart(product);
    this.addingId = product.id;
    setTimeout(() => this.addingId = null, 1200);
  }
}
