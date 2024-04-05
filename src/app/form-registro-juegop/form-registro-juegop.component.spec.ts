import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroJuegopComponent } from './form-registro-juegop.component';

describe('FormRegistroJuegopComponent', () => {
  let component: FormRegistroJuegopComponent;
  let fixture: ComponentFixture<FormRegistroJuegopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroJuegopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistroJuegopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
