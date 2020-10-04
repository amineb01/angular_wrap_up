import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavComponent } from '../templates/sidenav/sidenav.component';
import { FooterComponent } from '../templates/footer/footer.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from '../services/services.module';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
