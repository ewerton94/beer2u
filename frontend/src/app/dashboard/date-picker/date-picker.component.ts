import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
}

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class DatePickerComponent {
  control = new FormControl();
  @Input() label: string;


  writeValue(value: any): void {
    this.control.setValue(value)
    
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.control.valueChanges.subscribe(fn)

  }


}
