import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartPaymentRecieptAComponent } from './part-payment-reciept-a.component';

describe('PartPaymentRecieptAComponent', () => {
  let component: PartPaymentRecieptAComponent;
  let fixture: ComponentFixture<PartPaymentRecieptAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartPaymentRecieptAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartPaymentRecieptAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
