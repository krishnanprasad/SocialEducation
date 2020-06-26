import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassEComponent } from './online-class-e.component';

describe('OnlineClassEComponent', () => {
  let component: OnlineClassEComponent;
  let fixture: ComponentFixture<OnlineClassEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineClassEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
