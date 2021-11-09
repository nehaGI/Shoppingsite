import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';


import { HttpClientModule } from '@angular/common/http'


import { ProductService } from './service/product.service';
import { ProductComponentComponent } from './product-component/product-component.component';
import { HomeComponent } from './home/home.component';
import { ProductListServiceResolver } from './ProductListServiceResolver.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    ProductComponentComponent,
         HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductListServiceResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
