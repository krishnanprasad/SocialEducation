import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRemainderAComponent } from './schedule-remainder-a.component';

describe('ScheduleRemainderAComponent', () => {
  let component: ScheduleRemainderAComponent;
  let fixture: ComponentFixture<ScheduleRemainderAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleRemainderAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRemainderAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
