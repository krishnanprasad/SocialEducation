import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAComponent } from './success-a.component';

describe('SuccessAComponent', () => {
  let component: SuccessAComponent;
  let fixture: ComponentFixture<SuccessAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
