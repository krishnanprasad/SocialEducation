import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassDetailsBComponent } from './online-class-details-b.component';

describe('OnlineClassDetailsBComponent', () => {
  let component: OnlineClassDetailsBComponent;
  let fixture: ComponentFixture<OnlineClassDetailsBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineClassDetailsBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassDetailsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
