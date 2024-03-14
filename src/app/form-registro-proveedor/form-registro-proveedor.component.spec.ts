import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroProveedorComponent } from './form-registro-proveedor.component';

describe('FormRegistroProveedorComponent', () => {
  let component: FormRegistroProveedorComponent;
  let fixture: ComponentFixture<FormRegistroProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroProveedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistroProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
