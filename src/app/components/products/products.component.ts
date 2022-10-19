import {Component, Input, OnInit} from '@angular/core';
import {Product} from 'src/app/interfaces/Product';
import {ProductsService} from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  @Input() title: string = '';

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.shuffle(this.productService.getProducts());
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
