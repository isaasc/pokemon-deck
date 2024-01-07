import { TestBed } from '@angular/core/testing';

import { SupertypesService } from '../supertypes.service';

describe('SupertypesService', () => {
  let service: SupertypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupertypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
