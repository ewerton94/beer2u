import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard/dashboard.component'; //your component

const routes: Routes = [
    { path: '', component: DashboardComponent}
  ];

@NgModule({
  imports: [ NgRouterModule.forRoot(routes) ],
  exports: [
    NgRouterModule
   ] 
})
export class RouterModule { };