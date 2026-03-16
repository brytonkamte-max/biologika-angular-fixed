import { Product } from './product.model';

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: number;
  userId: number;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  firstOrder: boolean;
}
