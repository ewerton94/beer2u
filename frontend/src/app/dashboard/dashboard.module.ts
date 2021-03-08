import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FiltroBoxComponent } from './filtro-box/filtro-box.component';
import { TableDataComponent } from './table-data/table-data.component';
import { AutocompleteinputComponent } from './autocompleteinput/autocompleteinput.component';
import { DatePickerComponent } from './date-picker/date-picker.component';




@NgModule({
  declarations: [
    DashboardComponent,
    FiltroBoxComponent,
    TableDataComponent,
    AutocompleteinputComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ] 
})
export class DashboardModule { }
