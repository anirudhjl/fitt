import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MobilityService } from './mobility.service';

describe('MobilityService', () => {
  let service: MobilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(MobilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
