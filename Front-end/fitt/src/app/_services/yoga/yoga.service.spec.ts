import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { YogaService } from './yoga.service';

describe('YogaService', () => {
  let service: YogaService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(YogaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
