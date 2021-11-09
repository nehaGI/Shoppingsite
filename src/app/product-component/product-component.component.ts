import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  @Input()
  data!: Product;
  showDescription=false;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(productId:number){
    console.log('product with ide selected '+productId);
    //navigate to cart view by navigating to /cart

  }

}
