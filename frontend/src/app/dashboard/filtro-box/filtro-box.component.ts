import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';

export interface City {
  name: string;
}

export interface State {
  name: string;
}
export interface IQueryFilter {
  city: string;
  state: string;
  date: string;
}

@Component({
  selector: 'app-filtro-box',
  templateUrl: './filtro-box.component.html',
  styleUrls: ['./filtro-box.component.css']
})

export class FiltroBoxComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  cities: City[] = [
    {name: 'Maceió'},
    {name: 'São Paulo'}
  ]
  
  states: State[] = [
    {name: 'Alagoas'},
    {name: 'São Paulo'}
  ]

  queryForm = new FormGroup({
    city: new FormControl({}),
    state: new FormControl({}),
    date: new FormControl('')
  })

  onSubmit() {
    window.alert('haha')
  }
}
