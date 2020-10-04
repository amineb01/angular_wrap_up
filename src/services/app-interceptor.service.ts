import { HttpErrorResponse, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const header = new HttpHeaders({
      'Authorisation': 'token'
    })
    let clone = req.clone({
      headers: header
    });
    return next.handle(clone).pipe( catchError(this.handleError) )
  }

  handleError(err: HttpErrorResponse){
    console.log('in catchError', err);
    return throwError(err);
  }
}
