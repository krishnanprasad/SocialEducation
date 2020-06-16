import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassBComponent } from './online-class-b.component';

describe('OnlineClassBComponent', () => {
  let component: OnlineClassBComponent;
  let fixture: ComponentFixture<OnlineClassBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineClassBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
