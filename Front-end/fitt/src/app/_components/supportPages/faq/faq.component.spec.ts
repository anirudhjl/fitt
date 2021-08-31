import { FAQComponent } from './faq.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FAQComponent', () => {
  let component: FAQComponent;
  let fixture: ComponentFixture<FAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FAQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    const fixture = TestBed.createComponent(FAQComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.container-fluid h2').textContent).toContain(
      'Frequently Asked Questions'
    );
  });

  it('should render page content', () => {
    const fixture = TestBed.createComponent(FAQComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.container-fluid p').textContent).toContain(
      'DAY'
    );
  });

  it('should not render heading', () => {
    const fixture = TestBed.createComponent(FAQComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.container-fluid h2').textContent
    ).not.toContain('Frequent Question');
  });

  it('should not render page content', () => {
    const fixture = TestBed.createComponent(FAQComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.container-fluid h2').textContent
    ).not.toContain('trust');
  });
});
