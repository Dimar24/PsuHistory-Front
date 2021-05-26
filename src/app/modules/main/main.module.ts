import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { MainCabinetComponent } from './containers/main-cabinet/main-cabinet.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainCabinetComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
