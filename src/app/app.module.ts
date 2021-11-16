import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'


import { ProductService } from './service/product.service';
import { ProductComponentComponent } from './product-component/product-component.component';
import { HomeComponent } from './home/home.component';
import { ProductListServiceResolver } from './ProductListServiceResolver.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHttpInterceptor } from './service/http.intercepter';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ProductComponentComponent,
         HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductListServiceResolver,{provide:HTTP_INTERCEPTORS, useValue:AppHttpInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
 