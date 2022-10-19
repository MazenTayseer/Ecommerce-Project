import {Component, Input, OnInit} from '@angular/core';
import {PriceFilter, ProductsService} from "../../services/products.service";
import {Product} from "../../interfaces/Product";

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {
  @Input() priceList: Array<PriceFilter> = [{minValue: 0, maxValue: 0}];
  brandList: Array<string> = [];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
  }

  getProducts() {
    return this.productService.getProductWithFilter(this.priceList, this.brandList)
  }
}
