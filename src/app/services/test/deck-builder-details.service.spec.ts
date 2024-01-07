import { TestBed } from '@angular/core/testing';

import { DeckBuilderDetailsService } from '../deck-builder-details.service';

describe('DeckDetailsService', () => {
  let service: DeckBuilderDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckBuilderDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
