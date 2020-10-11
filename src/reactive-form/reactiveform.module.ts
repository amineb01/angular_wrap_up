import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormRoutingModule } from './reactiveform-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    ReactiveFormRoutingModule,
    AngularMaterialModule,
    CommonModule
  ]
})
export class ReactiveFormModule { }
