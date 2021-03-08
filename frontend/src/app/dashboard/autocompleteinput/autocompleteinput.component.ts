import {Component, OnInit, Input, forwardRef, Output, EventEmitter} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface Obj {
  id?: number; 
  name: string;
}

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutocompleteinputComponent),
  multi: true
}

@Component({
  selector: 'app-autocompleteinput',
  templateUrl: './autocompleteinput.component.html',
  styleUrls: ['./autocompleteinput.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})

export class AutocompleteinputComponent implements ControlValueAccessor {
  @Input() id: string;
  control = new FormControl();
  @Input() options: Obj[];
  @Input() label: string;
  @Input() isReadonly = false;
  @Output() valueChange = new EventEmitter();

  filteredOptions: Observable<Obj[]>;

  private innerValue = {}
  /*
  get value () {
    return this.innerValue
  }

  set value (v: any) {
    console.log('set')
    console.log(v)
    console.log(this.innerValue)
    if (v != this.innerValue) {
      this.innerValue = v
    }
    this.valueChange.emit(this.innerValue)

  }
  */

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  ngOnInit() {
    if (!!this.control) {
    this.filteredOptions = this.control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    }  
  }

  // Form

  writeValue(value: any): void {
    //this.value = v
    this.control.setValue(value)
    
  }

  registerOnChange(fn: any): void {
    console.log('On change')
    this.onChangeCb = fn
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log('On touched')
    this.onTouchedCb = fn
    this.control.valueChanges.subscribe(fn)

  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadonly = isDisabled
  }

  displayFn(obj: Obj): string {
    return obj && obj.name ? obj.name : '';
  }

  private _filter(name: string): Obj[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}