import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCardBComponent } from './notification-card-b.component';

describe('NotificationCardBComponent', () => {
  let component: NotificationCardBComponent;
  let fixture: ComponentFixture<NotificationCardBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCardBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCardBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
