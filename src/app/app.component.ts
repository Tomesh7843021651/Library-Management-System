import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryManagementSystem';
  baseUrl = 'http://localhost:8080/';
  id:number = 0;
  WhatToShow:number=4;
}
