import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassAComponent } from './online-class-a.component';

describe('OnlineClassAComponent', () => {
  let component: OnlineClassAComponent;
  let fixture: ComponentFixture<OnlineClassAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineClassAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
