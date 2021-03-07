import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroBoxComponent } from './filtro-box.component';

describe('FiltroBoxComponent', () => {
  let component: FiltroBoxComponent;
  let fixture: ComponentFixture<FiltroBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
