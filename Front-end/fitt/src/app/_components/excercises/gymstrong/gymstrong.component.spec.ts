import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymstrongComponent } from './gymstrong.component';

describe('GymstrongComponent', () => {
  let component: GymstrongComponent;
  let fixture: ComponentFixture<GymstrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymstrongComponent ]
    })
    .compileComponents();
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
