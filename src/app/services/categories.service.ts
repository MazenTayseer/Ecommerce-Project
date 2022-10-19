import {Injectable} from '@angular/core';
import {Category} from '../interfaces/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {
  }

  getCategories(): Array<Category> {
    return [
      {
        name: 'Shop now!',
        imageUrl: '/assets/Images/Sneaker3.jpg',
      },
      {
        name: 'Shop now!',
        imageUrl: '/assets/Images/Apparel.jpg',
      },
    ];
  }
}
