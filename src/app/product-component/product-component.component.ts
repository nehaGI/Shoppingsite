import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
  providers:[]
})
export class ProductComponentComponent implements OnInit {
  @Input()
  data!: Product;
  showDescription=false;

  constructor() { }

  ngOnInit(): void {
    

let ob= new Observable(obs=>{
  for(let i=0;i<10;i++){
    obs.next(i);
  }
})
ob.subscribe(val=>console.log(val),err=>console.log(err),()=>{
  
})
  }

  addToCart(productId:number){
    console.log('product with ide selected '+productId);
    //navigate to cart view by navigating to /cart

  }

}
