import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datas: Product[]=[];
  images:[]=[];
  rName:string='';
  products=[];

  constructor(private activatedRoute: ActivatedRoute,private _router:Router){}
  ngOnInit(){
    //params is deprecated
    //this.activatedRoute.paramMap.subscribe(path=>this.rName=path);
    this.datas=this.activatedRoute.snapshot.data['products'];
    console.log(this.datas);

  }

  gotToCart(){
   // this._router.navigate([''])

  }


}
