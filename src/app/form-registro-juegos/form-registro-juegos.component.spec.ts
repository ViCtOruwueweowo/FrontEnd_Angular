import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroJuegosComponent } from './form-registro-juegos.component';

describe('FormRegistroJuegosComponent', () => {
  let component: FormRegistroJuegosComponent;
  let fixture: ComponentFixture<FormRegistroJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroJuegosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistroJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
