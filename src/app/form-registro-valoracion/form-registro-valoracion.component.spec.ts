import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroValoracionComponent } from './form-registro-valoracion.component';

describe('FormRegistroValoracionComponent', () => {
  let component: FormRegistroValoracionComponent;
  let fixture: ComponentFixture<FormRegistroValoracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroValoracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistroValoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
