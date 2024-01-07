import { TestBed } from '@angular/core/testing';

import { TcgCardService } from '../tcg-card.service';

describe('CardService', () => {
  let service: TcgCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcgCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
