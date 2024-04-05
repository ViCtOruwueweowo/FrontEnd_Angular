import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoProveedorComponent } from './juego-proveedor.component';

describe('JuegoProveedorComponent', () => {
  let component: JuegoProveedorComponent;
  let fixture: ComponentFixture<JuegoProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoProveedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegoProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
