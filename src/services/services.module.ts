import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './posts.service';
import { AppInterceptorService } from './app-interceptor.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  providers: [ 
    PostsService,
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi:true}
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class ServicesModule { }
