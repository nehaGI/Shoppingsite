import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

import { Product } from "../models/Product";


@Injectable({
    providedIn: 'root'
  })
export class ProductService{
    getURL= 'https://fakestoreapi.com/products'
    data!: Product[];

    constructor(private httpClient:HttpClient){

    }

   getProducts(){
        
        return this.httpClient.get<Product[]>(this.getURL);
        
    }
    getSingleProduct(id:number){
        return this.httpClient.get<Product>(this.getURL+`/${id}`);
    }
    getAllCategories(){
        let categoryPath ='https://fakestoreapi.com/products/categories';
        return this.httpClient.get(categoryPath);
      
     }
     getProductOfSpecificCategory(category:string){
        let categoryPath ='https://fakestoreapi.com/products/category'+category;
        return this.httpClient.get(categoryPath);  
     }
    

}