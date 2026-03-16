import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Olio Extra Vergine D.O.P.',
      price: 18.50,
      image: 'assets/img/popooo.png',
      tag: 'Best Seller',
      desc: 'Olio extravergine biologico, fruttato e spremuto a freddo.'
    },
    {
      id: 2,
      name: 'Vino Rosso Riserva Bio',
      price: 24.00,
      image: 'assets/img/vinoo.png',
      tag: 'V.I.P.',
      desc: 'Vino rosso biologico, corposo e ideale per la degustazione.'
    },
    {
      id: 3,
      name: 'Miele Millefiori Italiano',
      price: 11.50,
      image: 'assets/img/mielle.png',
      tag: 'Bio',
      desc: 'Miele millefiori naturale, dolce e profumato.'
    },
    {
      id: 4,
      name: 'Confetture Bio Assortite',
      price: 9.90,
      image: 'assets/img/popoo.png',
      tag: 'Novità',
      desc: 'Selezione di confetture biologiche con frutta fresca.'
    },
    {
      id: 5,
      name: 'Confetture Artigianali (Mix)',
      price: 8.50,
      image: 'assets/img/popo.png',
      tag: 'Bio',
      desc: 'Confetture artigianali naturali, ricche di gusto.'
    },
    {
      id: 6,
      name: 'Salsa/Crema Bio della Casa',
      price: 7.90,
      image: 'assets/img/bobo.png',
      tag: 'Limited',
      desc: 'Salsa biologica dal sapore intenso e autentico.'
    }
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
