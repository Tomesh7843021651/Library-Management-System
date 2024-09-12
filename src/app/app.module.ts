import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BuyerComponent } from './buyer/buyer.component';
import { CategorymgmtComponent } from './admin/categorymgmt/categorymgmt.component';
import { CartComponent } from './buyer/cart/cart.component';
import { HistoryComponent } from './buyer/history/history.component';
import { ShowProductsComponent } from './buyer/show-products/show-products.component';
import { ProductComponent } from './admin/product/product.component';
import { RentComponent } from './buyer/rent/rent.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AdminComponent,
    BuyerComponent,
    CategorymgmtComponent,
    CartComponent,
    HistoryComponent,
    ShowProductsComponent,
    ProductComponent,
    RentComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
