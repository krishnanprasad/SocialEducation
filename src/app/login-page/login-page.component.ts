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
  constructor(private logser: LoginService, private router: Router) {}

  ngOnInit(

  ) {
    this.usertype='student';
  }

  radioChange(e){
    this.usertype=(e.target.value);
    //console.log('usertype='+this.usertype);
  }
  CheckCredentials() {
    if (
      this.username === 'student' &&
      this.password != null &&
      this.password !== undefined
    ) {
      this.logser.setUserId(this.username);
      this.IsUser = this.logser.getUserId();
      console.log('User' + this.IsUser);
      if (
        this.IsUser !== undefined &&
        this.IsUser !== null &&
        this.IsUser !== ''
      ) {
        this.router.navigate(['/User/Wall']);
      } else {
        alert('Credentials are Wrong');
      }
    } else {
      alert('Credentials are Wrong');
      this.username = '';
      this.password = '';
    }
  }
}
