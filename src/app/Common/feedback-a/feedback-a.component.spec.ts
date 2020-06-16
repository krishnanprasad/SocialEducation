import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAComponent } from './feedback-a.component';

describe('FeedbackAComponent', () => {
  let component: FeedbackAComponent;
  let fixture: ComponentFixture<FeedbackAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
