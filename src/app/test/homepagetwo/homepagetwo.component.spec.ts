import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagetwoComponent } from './homepagetwo.component';

describe('HomepagetwoComponent', () => {
  let component: HomepagetwoComponent;
  let fixture: ComponentFixture<HomepagetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
