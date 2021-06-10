import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { BurialComponent } from "./pages/burial/burial.component";
import { HomeComponent } from "./pages/home/home.component";
import { MapComponent } from "./pages/map/map.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'map', component: MapComponent},
  {path: 'burial', component: BurialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  MainRoutingModule { }
