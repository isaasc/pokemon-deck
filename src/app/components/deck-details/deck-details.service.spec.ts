import { TestBed } from '@angular/core/testing';

import { DeckDetailsService } from './deck-details.service';

describe('DeckDetailsService', () => {
  let service: DeckDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
