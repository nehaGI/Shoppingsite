import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ProductService } from './service/product.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'miniShoppingSite';
  datas: Product[]=[];
  images:[]=[];
  rName:string='';

  constructor(private pService:ProductService,private activatedRoute: ActivatedRoute,private _router:Router){}
  ngOnInit(){//params is deprecated
    //this.activatedRoute.paramMap.subscribe(path=>this.rName=path);

    this.getProducts();
     console.log( this.datas);

  }

  getP(){
    this._router.navigate(['product']);
  }
 getProducts(){
     this.pService.getProducts().subscribe(res=>{
      this.datas=res;
   });
   
  }
  

 
}
