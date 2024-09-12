import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{AppComponent} from '../../app.component'

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {
  list:any;
  cart:any;
  booksid:number=0;
  constructor(public http:HttpClient,public app:AppComponent){

    

    let url = this.app.baseUrl+"buyer/getCart/"+this.app.id;
    http.get(url).subscribe((data:any)=>{
      if(data == null){
        window.alert("Something is wrong")
      }
      else{
        this.list= data;
        for(let i =0 ; i<this.list.length ;i++){
          this.list[i].quant=1;
          this.list[i].amount= this.quant*this.list[i].price*((100-this.list[i].discount)/100);
          this.total = this.total + this.list.amount;
          this.booksid = this.list[i].booksid;
          console.log("books list id is here :-> "+this.list[i].booksid);
        }
        console.log(this.list)
      }
    })

  }
  quant:number = 1;
  total:number=1;
  

  rentit(list:any){
    let url = this.app.baseUrl+'buyer/renting/'+this.booksid+'/'+this.app.id;
    this.http.get(url).subscribe((data:any)=>{
      if(data == null || data ==0){
        window.alert("something is wrong");
      }
      else{
         if(data ==1 || data ==2){
          window.alert("done your renting is successfull")
         }
         else{
          window.alert("something is wrong");
         }
      }

    });
    
  }


  cartassign(l:number , val:any){
    let num : number = Number(val);
    console.log(num);
    console.log(this.list[l].quantity)
    for(let i =0; i<this.list.length;i++){
      if(i==l){
        if(num<= this.list[i].quantity){
          this.list[i].quant=num;
          this.list[i].amount = this.list[i].quant*this.list[i].price*((100-this.list[i].discount)/100);
        }
        else{
          window.alert("quantity is more than available")
        }
      }
    }
    this.total = 0;
    for(let i = 0 ; i<this.list.length;i++){
      this.total=this.total + this.list[i].amount;
    }

  }


  buyPod(){
    let url = this.app.baseUrl+"buyer/placeOrder/"+this.app.id;

    let array2D : number[][] = [];
    for(let i=0 ; i<this.list.length ; i++){
      let item = this.list[i];
      let cartid = this.list[i].id;  // Assuming 'id' is the property name
      let quantity = this.list[i].quant;   // Assuming 'quantity' is the property name
      array2D.push([cartid, quantity]);

    }
    this.http.post(url,array2D).subscribe((data:any)=>{
      if(data == null){
        window.alert("something went wrong")
      }
      else{
        if(data == 1){
          window.alert("product purchased")
          this.list=[];
        }
        else{
          window.alert("could not place order")
        }

      }

    })
  }

}
