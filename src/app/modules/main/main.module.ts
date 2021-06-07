import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCabinetComponent } from './main-cabinet/main-cabinet.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    MainCabinetComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
