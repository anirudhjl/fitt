import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GymStrongService } from './gym-strong.service';

describe('GymStrongService', () => {
  let service: GymStrongService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GymStrongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
