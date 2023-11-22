import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehiculoMarcaComponent } from './form-vehiculo-marca.component';

describe('FormVehiculoMarcaComponent', () => {
  let component: FormVehiculoMarcaComponent;
  let fixture: ComponentFixture<FormVehiculoMarcaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormVehiculoMarcaComponent]
    });
    fixture = TestBed.createComponent(FormVehiculoMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
