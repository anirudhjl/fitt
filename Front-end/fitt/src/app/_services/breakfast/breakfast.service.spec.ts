import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BreakfastService } from './breakfast.service';

describe('BreakfastService', () => {
  let service: BreakfastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BreakfastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
