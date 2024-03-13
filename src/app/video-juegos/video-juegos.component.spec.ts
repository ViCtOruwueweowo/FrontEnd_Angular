import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoJuegosComponent } from './video-juegos.component';

describe('VideoJuegosComponent', () => {
  let component: VideoJuegosComponent;
  let fixture: ComponentFixture<VideoJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoJuegosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
