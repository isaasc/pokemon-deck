import { TestBed } from '@angular/core/testing';

import { DeckStorageService } from '../deck-storage.service';

describe('DeckStorageService', () => {
  let service: DeckStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
