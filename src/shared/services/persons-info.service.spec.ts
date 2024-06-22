import { TestBed } from '@angular/core/testing';

import { PersonsInfoService } from './persons-info.service';

describe('PersonsInfoService', () => {
  let service: PersonsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
