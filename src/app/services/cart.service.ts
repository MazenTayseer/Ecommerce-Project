import { Injectable } from '@angular/core';
import { CartLine } from '../interfaces/CartLine';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartLines: Array<CartLine> = [];
  taxes = 20;
  constructor() {}

  getProductCount(): number {
    let num = 0;
    try {
      num = this.cartLines.map((x) => x.count).reduce((a, v) => (a += v));
    } catch {
      num = 0;
    }
    return num;
  }

  getProducts(): Array<CartLine> {
    this.cartLines = JSON.parse(localStorage.getItem('cartLines') || '[]');
    return this.cartLines;
  }

  addProduct(product: Product) {
    let itemFound = false;
    for (let i = 0; i < this.cartLines.length; i++) {
      if (this.cartLines[i].product.id === product.id) {
        this.cartLines[i].count += 1;
        itemFound = true;
      }
    }

    if (!itemFound) {
      this.cartLines.push(new CartLine(product));
    }

    localStorage.setItem('cartLines', JSON.stringify(this.cartLines));
  }

  getTotal() {
    return this.getSubTotal() + this.getShipping() + this.getTaxes();
  }

  getSubTotal() {
    return this.cartLines
      .map((l) => l.product.price * l.count)
      .reduce((a, v) => (a += v));
  }

  getTaxes() {
    return this.taxes;
  }

  getShipping() {
    return this.getSubTotal() * 0.1;
  }

  addItem(index: number) {
    this.cartLines[index].count += 1;
    localStorage.setItem('cartLines', JSON.stringify(this.cartLines));
  }

  removeLine(index: number) {
    this.cartLines.splice(index, 1);
  }

  removeItem(index: number) {
    this.cartLines[index].count--;
    if (this.cartLines[index].count == 0) this.removeLine(index);
    localStorage.setItem('cartLines', JSON.stringify(this.cartLines));
  }

  
}
