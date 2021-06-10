import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCabinetComponent } from './admin-cabinet/admin-cabinet.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AdminCabinetComponent,

    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    AdminRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class AdminModule { }
