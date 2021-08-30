import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DinnerService } from './dinner.service';

describe('DinnerService', () => {
  let service: DinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(DinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
