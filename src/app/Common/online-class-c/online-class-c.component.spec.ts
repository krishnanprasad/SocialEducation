import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassCComponent } from './online-class-c.component';

describe('OnlineClassCComponent', () => {
  let component: OnlineClassCComponent;
  let fixture: ComponentFixture<OnlineClassCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineClassCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
