import { TestBed } from '@angular/core/testing';

import { GamespService } from './gamesp.service';

describe('GamespService', () => {
  let service: GamespService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamespService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
