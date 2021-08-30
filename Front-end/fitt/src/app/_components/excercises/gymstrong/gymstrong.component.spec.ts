import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymstrongComponent } from './gymstrong.component';
import { SearchfilterPipe } from '../../../searchfilter.pipe';

describe('GymstrongComponent', () => {
  let component: GymstrongComponent;
  let fixture: ComponentFixture<GymstrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GymstrongComponent, SearchfilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymstrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
