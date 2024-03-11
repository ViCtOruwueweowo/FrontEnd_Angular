import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroAppComponent } from './form-registro-app.component';

describe('FormRegistroAppComponent', () => {
  let component: FormRegistroAppComponent;
  let fixture: ComponentFixture<FormRegistroAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
