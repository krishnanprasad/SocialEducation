import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarpageNotloginComponent } from './webinarpage-notlogin.component';

describe('WebinarpageNotloginComponent', () => {
  let component: WebinarpageNotloginComponent;
  let fixture: ComponentFixture<WebinarpageNotloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarpageNotloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarpageNotloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
