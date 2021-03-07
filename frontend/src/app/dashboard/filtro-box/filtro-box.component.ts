import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-filtro-box',
  templateUrl: './filtro-box.component.html',
  styleUrls: ['./filtro-box.component.css']
})
export class FiltroBoxComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

}
