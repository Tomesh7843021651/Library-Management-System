import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import{Router} from'@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  WhatToShow:number=0;
  changeWhatToShow(num:number){
    this.WhatToShow=num;
  }

  name:string='';


  constructor(public http:HttpClient,public app:AppComponent,public route:Router){

    let url = app.baseUrl+'login/getName'+app.id;
    http.get(url).subscribe((data:any)=>{
      if(data == null){
        window.alert('Something is wrong')
      }else{
        this.name=data[0];
      }
    });

  }
  logout(){

    this.route.navigate(["/login"]);
    // this.app.WhatToShow=0

  }

}
