import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component'
import {HomeComponent} from'./home/home.component';
import{ContactComponent} from './contact/contact.component';
import {AboutUsComponent} from './about-us/about-us.component';
import{AdminComponent} from './admin/admin.component';
import{BuyerComponent} from './buyer/buyer.component'

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"register",component:RegistrationComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"aboutUs",component:AboutUsComponent
  },
  {
    path:"admin",component:AdminComponent
  },
  {
    path:"buyer",component:BuyerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
