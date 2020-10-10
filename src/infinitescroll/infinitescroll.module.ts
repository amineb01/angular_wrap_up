import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { ImagesRoutingModule } from './images-routing.module';

import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    AngularMaterialModule,
    InfiniteScrollModule,
    ImagesRoutingModule,
    CommonModule
  ]
})
export class InfinitescrollModule { }
