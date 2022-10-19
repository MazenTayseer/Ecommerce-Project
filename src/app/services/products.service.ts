import {Injectable} from '@angular/core';
import {Product} from '../interfaces/Product';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }


  products = [
    {
      id: 1,
      name: 'Jordan 4 UNC',
      price: 400,
      imageUrl: '/assets/Images/Uncs4.jpg',
      size: '9.5 US',
      brand: 'Air Jordan',
      color: "UNIVERSITY BLUE/TECH GREY-WHITE-BLACK"
    },
    {
      id: 2,
      name: 'Jordan 5 Fire Red',
      price: 250,
      imageUrl: '/assets/Images/FireRed5.jpg',
      size: '9.5 US',
      brand: 'Air Jordan',
      color: "WHITE / RED"
    },
    {
      id: 3,
      name: 'FOG Essentials Hoodie Beige',
      price: 90,
      imageUrl: '/assets/Images/FOGBeige.jpg',
      size: 'M',
      brand: 'Fear Of God',
      color: "BEIGE"
    },
    {
      id: 4,
      name: "Nike Air Force 1 Low '07 White",
      price: 90,
      imageUrl: '/assets/Images/AFwhite.jpg',
      size: '9.5 US',
      brand: 'Nike',
      color: "WHITE"
    },
    {
      id: 5,
      name: 'FOG Essentials Hoodie Black',
      price: 90,
      imageUrl: '/assets/Images/FOGBlack.jpg',
      size: 'M',
      brand: 'Fear Of God',
      color: "BLACK"
    },
    {
      id: 6,
      name: 'Nike Tech Fleece Black',
      price: 100,
      imageUrl: '/assets/Images/TechFleeceBlack.jpg',
      size: '9.5 US',
      brand: 'M',
      color: "BLACK"
    },
    {
      id: 7,
      name: 'Nike Dunk Low Panda',
      price: 110,
      imageUrl: '/assets/Images/Panda.jpg',
      size: '9.5 US',
      brand: 'Nike',
      color: "WHITE / BLACK"
    },
    {
      id: 8,
      name: 'Yeezy 700 Wave Runner',
      price: 300,
      imageUrl: '/assets/Images/WaveRunner.jpg',
      size: '9.5 US',
      brand: 'Yeezy',
      color: "SOLID GREY / CHALK WHITE / CORE BLACK"
    },
  ];

  dbproducts = []

  getProductsFromDatabase() {
    return this.httpClient.get(`${environment.apiURL}product`, {
      headers: {Authorization: `${localStorage.getItem('token')}`},
    })
  }


  getProductById(id: number): Product {
    return this.products.find((x) => x.id == id) ?? ({} as Product);
  }

  getProducts() {
    return this.products;
  }

  getProductWithFilter(
    priceList: Array<PriceFilter>,
    brandList: Array<string>,
  ): Array<Product> {

    return this.products.filter((item) => {
      return this.isPriceInRange(item.price, priceList) &&
        this.isBrandInRange(item.brand, brandList)
    })
  }

  isBrandInRange(brand: string, brandList: Array<string>) {
    if (brandList.length == 0) return true;
    return brandList.includes(brand);
  }

  isPriceInRange(price: number, priceList: Array<PriceFilter>): boolean {
    for (let i = 0; i < priceList.length; i++) {
      if (priceList[i].minValue <= price && priceList[i].maxValue >= price)
        return true;
      if (priceList[i].minValue == 0 && priceList[i].maxValue == 0) return true;
    }
    return false;
  }

}

export interface PriceFilter {
  minValue: number;
  maxValue: number;
}
