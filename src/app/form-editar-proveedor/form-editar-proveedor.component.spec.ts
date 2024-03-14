import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarProveedorComponent } from './form-editar-proveedor.component';

describe('FormEditarProveedorComponent', () => {
  let component: FormEditarProveedorComponent;
  let fixture: ComponentFixture<FormEditarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditarProveedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
