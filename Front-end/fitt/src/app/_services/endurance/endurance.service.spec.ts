import { TestBed } from '@angular/core/testing';

import { EnduranceService } from './endurance.service';

describe('EnduranceService', () => {
  let service: EnduranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnduranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
