import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroJuegoComponent } from './form-registro-juego.component';

describe('FormRegistroJuegoComponent', () => {
  let component: FormRegistroJuegoComponent;
  let fixture: ComponentFixture<FormRegistroJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroJuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistroJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
