import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import{Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(public http:HttpClient,public app:AppComponent, public route:Router){}
  name!:string;
  // email!:string;
  username!:string;
  password!:string;
  accounttype:number=2;

  register(){
    let url=this.app.baseUrl+"login/register"
    let user={
      accountType:this.accounttype,
      name:this.name,
      username:this.username,
      password:this.password
    }
    console.log(url)
    this.http.post(url,user).subscribe((data:any)=>{
      console.log(data)
      if (data==null) {
        window.alert('Something is wrong');
      }
       if(data==1){
        window.alert("enter username");
      }
      if(data==2){
         window.alert("Enter password");
      }
       if(data==4){
        window.alert("successfully registerd")
        this.app.WhatToShow=0

      }
       if(data==3){
        window.alert("username already exist try new one")
      }
    })
  }
  logout(){
    this.route.navigate(["/login"]);
    // this.app.WhatToShow=0
    
  }
  home(){
    this.route.navigate([""]);
    //this.app.WhatToShow=4;
  }

}
