import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YogaComponent } from './yoga.component';
import { SearchfilterPipe } from '../../../searchfilter.pipe';

describe('YogaComponent', () => {
  let component: YogaComponent;
  let fixture: ComponentFixture<YogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [YogaComponent, SearchfilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
