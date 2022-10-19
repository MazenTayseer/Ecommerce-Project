import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app-component/app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoryComponent} from './components/category/category.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {ContactComponent} from './layouts/contact/contact.component';
import {CartComponent} from './components/cart/cart.component';
import {BigDisplayComponent} from './layouts/big-display/big-display.component';
import {ProductComponent} from './components/product/product.component';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './components/account/account.component';
import {ShopComponent} from './components/shop/shop.component';
import {MenuComponent} from './layouts/menu/menu.component';
import {DetailComponent} from './components/detail/detail.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {HttpClientModule} from '@angular/common/http';
import {ShopFilterComponent} from './components/shop-filter/shop-filter.component';
import {ShopProductComponent} from './components/shop-product/shop-product.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    FooterComponent,
    CategoriesComponent,
    ContactComponent,
    CartComponent,
    BigDisplayComponent,
    ProductComponent,
    ProductsComponent,
    HomeComponent,
    AccountComponent,
    ShopComponent,
    MenuComponent,
    DetailComponent,
    CheckoutComponent,
    ShopFilterComponent,
    ShopProductComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
