import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(public http:HttpClient, public app:AppComponent, public route:Router){
    
  }
  onLogin(){
    window.alert("Login First !!!");
  }

  login(){
this.route.navigate(["/login"])
// this.app.WhatToShow=0;
}
onAbout(){
    this.route.navigate(["/aboutUs"])

  }
onContact(){
    this.route.navigate(["/contact"])

  }

  registration(){
    this.route.navigate(["/register"])

    // this.app.WhatToShow=3;

  }



 

}
