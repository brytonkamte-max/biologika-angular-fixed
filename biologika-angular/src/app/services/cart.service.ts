import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Order } from '../models/order.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = signal<CartItem[]>([]);
  private _orders = signal<Order[]>(this.loadOrders());

  readonly items = this._items.asReadonly();
  readonly orders = this._orders.asReadonly();
  readonly totalItems = computed(() => this._items().reduce((s, i) => s + i.quantity, 0));
  readonly subtotal = computed(() => this._items().reduce((s, i) => s + i.price * i.quantity, 0));

  private loadOrders(): Order[] {
    const stored = localStorage.getItem('biologika_orders');
    return stored ? JSON.parse(stored) : [];
  }

  private saveOrders(orders: Order[]) {
    this._orders.set(orders);
    localStorage.setItem('biologika_orders', JSON.stringify(orders));
  }

  addToCart(product: Product) {
    const current = this._items();
    const existing = current.find(i => i.id === product.id);
    if (existing) {
      this._items.set(current.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      this._items.set([...current, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number) {
    this._items.set(this._items().filter(i => i.id !== productId));
  }

  clearCart() {
    this._items.set([]);
  }

  checkout(userId: number, hasFirstOrderDiscount: boolean): Order {
    const subtotal = this.subtotal();
    const discount = hasFirstOrderDiscount ? subtotal * 0.05 : 0;
    const total = subtotal - discount;

    const order: Order = {
      id: Date.now(),
      userId,
      date: new Date().toISOString(),
      items: [...this._items()],
      subtotal,
      discount,
      total,
      firstOrder: hasFirstOrderDiscount
    };

    this.saveOrders([...this._orders(), order]);
    this.clearCart();
    return order;
  }

  getOrdersByUser(userId: number): Order[] {
    return this._orders().filter(o => o.userId === userId);
  }
}
