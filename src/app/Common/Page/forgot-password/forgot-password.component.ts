import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public Answer;
  public Email;
  public newpassword;
  constructor() { }

  ngOnInit() {
  }
  ForgotPassowd() {
  }
}
