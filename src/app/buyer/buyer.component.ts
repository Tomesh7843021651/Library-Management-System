import { Component } from '@angular/core';

import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import {Router} from'@angular/router';


@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent {
  WhatToShow:number=0;
  changeWhatToShow(num:number){
    this.WhatToShow=num;
  }
  constructor(public http:HttpClient, public app:AppComponent, public route:Router){
    
  }
  logout(){
    this.route.navigate(["/login"]);
    // this.app.WhatToShow=0

  }
  

}
