import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from './components/account/account.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {DetailComponent} from './components/detail/detail.component';
import {ShopComponent} from './components/shop/shop.component';
import {HomeComponent} from './home/home.component';
import {ContactUsComponent} from "./components/contact-us/contact-us.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'account', component: AccountComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'contact', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
