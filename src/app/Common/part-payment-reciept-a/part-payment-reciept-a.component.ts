import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-part-payment-reciept-a',
  templateUrl: './part-payment-reciept-a.component.html',
  styleUrls: ['./part-payment-reciept-a.component.css']
})
export class PartPaymentRecieptAComponent implements OnInit {
@Input('paymentlistdata') paymentlist; 
  constructor() { }

  ngOnInit() {
  }

}
