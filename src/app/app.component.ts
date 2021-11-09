import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ProductService } from './service/product.service';
interface Rating {
  rate:number,
  count:number
}

interface Product{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:Rating
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'miniShoppingSite';
  datas: Product[]=[];
  images:[]=[];

  constructor(private pService:ProductService){}
  ngOnInit(){
    this.getProducts();
     console.log( this.datas);

  }

 getProducts(){
     this.pService.getProducts().subscribe(res=>{
      this.datas=res;
   });
   
  }
  

 
}
