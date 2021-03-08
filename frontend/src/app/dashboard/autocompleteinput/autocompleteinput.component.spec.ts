import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteinputComponent } from './autocompleteinput.component';

describe('AutocompleteinputComponent', () => {
  let component: AutocompleteinputComponent;
  let fixture: ComponentFixture<AutocompleteinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
