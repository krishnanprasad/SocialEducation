import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarSmallAComponent } from './webinar-small-a.component';

describe('WebinarSmallAComponent', () => {
  let component: WebinarSmallAComponent;
  let fixture: ComponentFixture<WebinarSmallAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarSmallAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarSmallAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
