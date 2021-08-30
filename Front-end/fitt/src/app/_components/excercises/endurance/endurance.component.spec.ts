import { SearchfilterPipe } from './../../../searchfilter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnduranceComponent } from './endurance.component';

describe('EnduranceComponent', () => {
  let component: EnduranceComponent;
  let fixture: ComponentFixture<EnduranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [EnduranceComponent, SearchfilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
