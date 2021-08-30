import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EnduranceService } from './endurance.service';

describe('EnduranceService', () => {
  let service: EnduranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EnduranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
