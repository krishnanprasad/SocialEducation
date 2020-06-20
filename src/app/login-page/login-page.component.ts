import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private username;
  private password;
  private usertype;
  protected IsUser;
  ShowOTPModal: boolean = false;
  constructor(private logser: LoginService, private router: Router) { }

  ngOnInit(

  ) {
    this.usertype = 'student';
  }

  radioChange(e) {
    this.usertype = (e.target.value);
    //console.log('usertype='+this.usertype);
  }

  sendOTP() {

    this.alter_OTPModal();
  }
  alter_OTPModal() {

    this.ShowOTPModal = !this.ShowOTPModal;
  }
  confirm_Credentials() {
    var myObj = { usertype: 'org', isstudent: false };
    localStorage.setItem('usertype', JSON.stringify(myObj));
    this.router.navigate(['/Institution/Wall']);
  }
  confirm_otp() {
    var myObj = { usertype: 'part', isstudent: true };
    localStorage.setItem('usertype', JSON.stringify(myObj));
    this.alter_OTPModal()
    this.router.navigate(['/User/Wall']);
  }
}
