import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroTransporteComponent } from './form-registro-transporte.component';

describe('FormRegistroTransporteComponent', () => {
  let component: FormRegistroTransporteComponent;
  let fixture: ComponentFixture<FormRegistroTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroTransporteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistroTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
