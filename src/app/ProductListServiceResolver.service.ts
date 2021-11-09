import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve ,Router,RouterStateSnapshot} from '@angular/router';
import { Product } from './models/Product';
import { ProductService } from './service/product.service';


@Injectable()
export class ProductListServiceResolver implements Resolve<any> {

  constructor(private _router:Router,private productService:ProductService) { }

  //The resolve method must return either an Observable<any>,  Promise<any> or just data.
  // In the example above, we are invoking the getProducts method of method of the productService, which returns an observable.
  resolve(activatedRouteSnapshot:ActivatedRouteSnapshot,routerStateSnapeShot:RouterStateSnapshot){
        return this.productService.getProducts();
  }
  
}
