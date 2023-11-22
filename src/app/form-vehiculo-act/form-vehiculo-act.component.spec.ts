import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehiculoActComponent } from './form-vehiculo-act.component';

describe('FormVehiculoActComponent', () => {
  let component: FormVehiculoActComponent;
  let fixture: ComponentFixture<FormVehiculoActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormVehiculoActComponent]
    });
    fixture = TestBed.createComponent(FormVehiculoActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
