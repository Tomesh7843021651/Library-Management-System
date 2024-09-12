import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  list:any=''; // all products
  list2:any=''; //all categories
  name: string='';
  price:number=0;
  quantity:number=0;
  description:string='';
  discount:number=0;
  catid:number=0;
  rating:number=0;


  constructor(public http:HttpClient, public app:AppComponent){

    this.loadProducts();}


    loadProducts(){
    //api call to get all existing categories
    let url = this.app.baseUrl+'books/getAllBooks'+this.app.id

    this.http.get(url).subscribe((data:any)=>{
      if(data == null){
       window.alert('Something is wrong ')
      }
      else{
        this.list=data;  
        console.log(this.list);      
      }
    });

   
    let url2=this.app.baseUrl+'admin/getAllCategories'
    this.http.get(url2).subscribe((data:any)=>{
      if(data == null){
        window.alert('Something is wrong')
      }
      else{
        this.list2=data;
      }
    }); 
  
  }
  
  addProduct(){
    let product={
      "name":this.name,
      "userid":this.app.id,
      "price":this.price,
      "quantity":this.quantity,
      "description":this.description,
      "discount":this.discount,
      "rating":this.rating,
      "categoryid":this.catid,
    
    };
    let url = this.app.baseUrl+'books/AddNewBooks';
    this.http.post(url,product).subscribe((data:any)=>{
      if(data == null){
        window.alert('Something is wrong');
      }
      else{
        this.list.push(data);
        this.loadProducts();
        this.name='';
        this.price=0;
        this.quantity=0;
        this.description='';
        this.discount=0;
        this.rating=0;
        this.catid=0;
       
      }
    });
  }

  logout(){
    this.app.WhatToShow=0

  }

}
