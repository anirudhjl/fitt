import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyweightComponent } from './bodyweight.component';
import { SearchfilterPipe } from '../../../searchfilter.pipe';

describe('BodyweightComponent', () => {
  let component: BodyweightComponent;
  let fixture: ComponentFixture<BodyweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [BodyweightComponent, SearchfilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
