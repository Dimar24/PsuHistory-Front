import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCabinetComponent } from './main-cabinet/main-cabinet.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MapComponent } from './pages/map/map.component';
import { BurialComponent } from './pages/burial/burial.component';
import { LibraryModule } from 'src/app/core/library/library.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    MainCabinetComponent,
    HomeComponent,
    AboutComponent,
    MapComponent,
    BurialComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MainRoutingModule,
    LibraryModule,
    FlexLayoutModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    MapComponent,
    BurialComponent
  ]
})
export class MainModule { }
