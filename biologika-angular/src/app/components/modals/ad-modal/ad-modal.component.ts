import { Component, inject, output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-ad-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad-modal.component.html'
})
export class AdModalComponent implements OnInit {
  productService = inject(ProductService);

  close = output<void>();
  goToProducts = output<void>();

  product: Product | undefined;
  discountPct = 15;
  newPrice = 0;

  ngOnInit() {
    this.product = this.productService.getById(2); // Vino Rosso
    if (this.product) {
      this.newPrice = this.product.price * (1 - this.discountPct / 100);
    }
  }

  onGoToProducts() {
    this.goToProducts.emit();
    this.close.emit();
  }
}
