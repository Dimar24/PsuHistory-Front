import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCabinetComponent } from './modules/admin/containers/admin-cabinet/admin-cabinet.component';
import { Error404Component } from './modules/error/error404/error404.component';
import { Error500Component } from './modules/error/error500/error500.component';
import { MainCabinetComponent } from './modules/main/containers/main-cabinet/main-cabinet.component';

const routes: Routes = [
  {path: '',
    component: MainCabinetComponent,
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)},
  {path: 'admin',
    component: AdminCabinetComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'error404', component: Error404Component},
  {path: 'error500', component: Error500Component},
  {path: '**', redirectTo: '/error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
