import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [
    {
      id:'1',
      name:'PRODUCT ITEM NUMBER 1',
      description:'Description for product item number 1',
      thumnails:'https://via.placeholder.com/200x150',
      price:5.99,
      quantity:2
    },
    {
      id:'2',
      name:'PRODUCT ITEM NUMBER 2',
      description:'Description for product item number 2',
      thumnails:'https://via.placeholder.com/200x150',
      price:9.99,
      quantity:3
    },
     {
      id:'3',
      name:'PRODUCT ITEM NUMBER 3',
      description:'Description for product item number 3',
      thumnails:'https://via.placeholder.com/200x150',
      price:11.99,
      quantity:1
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
