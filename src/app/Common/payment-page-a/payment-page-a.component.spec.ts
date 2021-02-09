import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPageAComponent } from './payment-page-a.component';

describe('PaymentPageAComponent', () => {
  let component: PaymentPageAComponent;
  let fixture: ComponentFixture<PaymentPageAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPageAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
