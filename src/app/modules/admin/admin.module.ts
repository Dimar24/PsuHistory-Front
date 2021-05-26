import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCabinetComponent } from './containers/admin-cabinet/admin-cabinet.component';
import { HomeComponent } from './containers/home/home.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminCabinetComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
