import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductListServiceResolver } from './ProductListServiceResolver.service';

const routes: Routes = [
  
  {path:'products',component:HomeComponent,resolve:{products:ProductListServiceResolver}},
  {path:'',pathMatch:'full',redirectTo:'products'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
