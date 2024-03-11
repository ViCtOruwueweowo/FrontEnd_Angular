import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginAppComponent } from './form-login-app.component';

describe('FormLoginAppComponent', () => {
  let component: FormLoginAppComponent;
  let fixture: ComponentFixture<FormLoginAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLoginAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormLoginAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
