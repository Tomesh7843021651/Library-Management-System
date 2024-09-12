import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import{Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public http:HttpClient, public app:AppComponent,public route:Router){}

  username:string='';
  password:string='';

  login(){
    let url = this.app.baseUrl+'login/log'
    let obj = [this.username,this.password];
    console.log(obj);
    this.http.post(url,obj).subscribe((data:any)=>{
      console.log(data);
      console.log(data.accountType);
      if(data == null){
        window.alert('Something  is wrong');
      }
      else{
        if(data.id<1){
          window.alert(data.errorMessage)
        }
        else{
        this.app.id =data.id;
        console.log(data.accountType);
        if(data.accountType==1){

          this.route.navigate(["/admin"])
        }
        else{
          this.route.navigate(["/buyer"])

        }
       // this.app.WhatToShow=data.accountType;
      // this.app.WhatToShow=3;
    }
      }
    });
  }
  register(){
    //this.app.WhatToShow=3;
    this.route.navigate(["/register"])
  }
  
  home(){
    this.route.navigate([""])
    // this.app.WhatToShow=4;
  }

}
