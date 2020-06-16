import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassDetailsAComponent } from './online-class-details-a.component';

describe('OnlineClassDetailsAComponent', () => {
  let component: OnlineClassDetailsAComponent;
  let fixture: ComponentFixture<OnlineClassDetailsAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineClassDetailsAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassDetailsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
