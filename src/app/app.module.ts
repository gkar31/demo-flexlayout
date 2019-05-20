import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { HttpClientModule } from '@angular/common/http';

import { CarsService } from './cars.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ICar } from './car';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  public currentCar : ICar ;
 }
