import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor{
   intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
       console.log('do what ever action u want to perform on request like adding something in heading, adding cookies etc');
       
   /*     const token: string ='abc'//authService.Token; //Get token from some service
    if (token) {
        // http request are immutable u can't change modify the request so u have to create or clone the req and make new request and send that to next HttpHandler
        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });//sends bearer token as authentication
                
        }
    if (!req.headers.has('Content-Type')) {
         req = req.clone({ headers: req.headers.set('Content-Type', 'Application/json ')});
        } */

    
   //req=req.clone({withCredentials:true});//sends cookies value for authentication

    
    
        return next.handle(req);     

   }
  
}