import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstTransactionSuccessAComponent } from './inst-transaction-success-a.component';

describe('InstTransactionSuccessAComponent', () => {
  let component: InstTransactionSuccessAComponent;
  let fixture: ComponentFixture<InstTransactionSuccessAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstTransactionSuccessAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstTransactionSuccessAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
