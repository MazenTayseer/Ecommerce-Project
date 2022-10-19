import {Component, OnInit} from '@angular/core';
import {Product} from '../interfaces/Product';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.shuffle(this.productsService.getProducts());
  }

  getProducts(count: number) {
    return this.products.slice(0, count);
  }

  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }


}
