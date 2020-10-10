import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInterceptorService } from './app-interceptor.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PostsService } from './posts.service';
import { ImagesService } from './images.service';


@NgModule({
  declarations: [
  ],
  providers: [ 
    PostsService,
    ImagesService,
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi:true}
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class ServicesModule { }
