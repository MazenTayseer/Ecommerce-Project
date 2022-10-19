import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private productService: ProductsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.login("Mazen", "0000").subscribe((data) => {
      this.authService.saveId(data);
    }, (error) => {
      console.log(error)
    });
  }

}
