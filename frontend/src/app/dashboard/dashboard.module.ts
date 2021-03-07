import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FiltroBoxComponent } from './filtro-box/filtro-box.component';
import { TableDataComponent } from './table-data/table-data.component';




@NgModule({
  declarations: [
    DashboardComponent,
    FiltroBoxComponent,
    TableDataComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ] 
})
export class DashboardModule { }
