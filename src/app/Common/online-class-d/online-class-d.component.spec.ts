import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassDComponent } from './online-class-d.component';

describe('OnlineClassDComponent', () => {
  let component: OnlineClassDComponent;
  let fixture: ComponentFixture<OnlineClassDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineClassDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
