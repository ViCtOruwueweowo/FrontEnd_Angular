import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroJuegoplatComponent } from './form-registro-juegoplat.component';

describe('FormRegistroJuegoplatComponent', () => {
  let component: FormRegistroJuegoplatComponent;
  let fixture: ComponentFixture<FormRegistroJuegoplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegistroJuegoplatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRegistroJuegoplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
