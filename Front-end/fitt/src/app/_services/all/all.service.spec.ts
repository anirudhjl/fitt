import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AllService } from './all.service';

describe('AllService', () => {
  let service: AllService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(AllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
