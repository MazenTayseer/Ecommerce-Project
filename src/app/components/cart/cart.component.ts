import { Component, OnInit } from '@angular/core';
import { CartLine } from 'src/app/interfaces/CartLine';
import { Product } from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartlines: Array<CartLine> = [];
  isItemAdded = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartlines = this.cartService.getProducts();
    if (this.cartlines.length > 0) {
      this.isItemAdded = true;
    }
  }

  getTotalOfOne() {
    return this.cartService.getProductCount();
  }

  getTotal() {
    return this.cartService.getSubTotal();
  }

  addItem(index: number) {
    this.isItemAdded = true;
    this.cartService.addItem(index);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    if (this.cartlines.length == 0) {
      this.isItemAdded = false;
    }
  }

  getShipping() {
    return this.cartService.getShipping();
  }

  getTaxes() {
    return this.cartService.getTaxes();
  }

  getAllCost() {
    return this.cartService.getTotal();
  }
}
