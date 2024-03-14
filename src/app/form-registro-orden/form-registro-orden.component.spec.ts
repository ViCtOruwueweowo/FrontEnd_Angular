import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroOrdenComponent } from './form-registro-orden.component';

describe('FormRegistroOrdenComponent', () => {
  let component: FormRegistroOrdenComponent;
  let fixture: ComponentFixture<FormRegistroOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroOrdenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistroOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
