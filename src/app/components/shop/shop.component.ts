import {Component, OnInit} from '@angular/core';
import {PriceFilter, ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  priceList: Array<PriceFilter> = [{minValue: 0, maxValue: 0}];

  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.productService.getProductsFromDatabase().subscribe(data => {
      console.log(data)
    })
  }

  changePrice(priceList: Array<PriceFilter>) {
    this.priceList = priceList;
  }
}
