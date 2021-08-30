import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchfilterPipe } from '../../../searchfilter.pipe';
import { MobilityComponent } from './mobility.component';

describe('MobilityComponent', () => {
  let component: MobilityComponent;
  let fixture: ComponentFixture<MobilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MobilityComponent, SearchfilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
