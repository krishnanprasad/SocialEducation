import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inst-transaction-success-a',
  templateUrl: './inst-transaction-success-a.component.html',
  styleUrls: ['./inst-transaction-success-a.component.css']
})
export class InstTransactionSuccessAComponent implements OnInit {
  transactiondetails:any;
  constructor() { }

  ngOnInit() {
    this.transactiondetails=[{
      transaction_id:'121313164',
      transaction_date:'121313164',
      transaction_user:'121313164',
      transaction_amount:'100',
      web_id:'121313164',
      user_name:'Suresh Kumar',
      user_id:'U12123'
    },
    {
      transaction_id:'121313164',
      transaction_date:'121313164',
      transaction_user:'121313164',
      transaction_amount:'60',
      web_id:'121313164',
      user_name:'Ragunandan',
      user_id:'U12123'
    }
  ]
  }

}
