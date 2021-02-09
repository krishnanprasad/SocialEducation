import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';
import { transactionclass } from 'src/app/class/transactionclass';
import { WebinarService } from 'src/app/Service/webinar.service';
import { LoginService } from 'src/app/Service/login.service';
import { webinar } from 'src/app/class/webinar';

@Component({
  selector: 'app-payment-page-a',
  templateUrl: './payment-page-a.component.html',
  styleUrls: ['./payment-page-a.component.css']
})
export class PaymentPageAComponent implements OnInit {
  webinardetail = new webinar();
  transaction = new transactionclass('', '', 0);
  result: any;
  //webinardetail: any;
  constructor(private route: ActivatedRoute,
    private loader: LoaderAService,
    private webinarService: WebinarService,
    private loginService: LoginService,
    private navigate: Router,
  ) { }

  ngOnInit() {
    debugger
    this.transaction.webinarid = this.route.snapshot.params['id'];
    this.get_webinardata_payment();
    this.loader.close()
  }
  get_webinardata_payment() {
    debugger
    this.webinarService.get_WebinarDetails(this.transaction.webinarid, this.loginService.getUserId(), true).subscribe(data => {
      if (data["status"] == 100) {
        this.webinardetail = data["result"];
        debugger


      }
      else if (data["status"] == 300) {


      }
      else if (data["status"] == 400) {

      }
    }, (err) => {

    });
  }

  confirmorder() {
    debugger
    this.transaction.userid = this.loginService.getUserId();
    debugger
    this.transaction.amount = this.webinardetail.webinarfee;
    debugger
    this.webinarService.confirm_Transaction(this.transaction).subscribe(data => {
      if (data["status"] == 100) {      
        this.navigate.navigate(['/User/WebinarDetails', this.webinardetail.webinarid]);
      }
      else if (data["status"] == 300) {


      }
      else if (data["status"] == 400) {

      }
    }, (err) => {

    });
  }
}

