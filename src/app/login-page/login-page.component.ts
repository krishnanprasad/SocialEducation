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
  public chooseuserval: number = 1;
  public email:string;
  private password;
  private usertype;
  protected IsUser;
  ShowOTPModal: boolean = false;
  constructor(private loginservice: LoginService, private router: Router) { }

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
    sessionStorage.setItem('usertype', JSON.stringify(myObj));
    this.router.navigate(['/Institution/Wall']);
  }
  confirm_otp() {
    var myObj = { usertype: 'part', isstudent: true };
    sessionStorage.setItem('usertype', JSON.stringify(myObj));
    this.alter_OTPModal()
    this.router.navigate(['/User/Wall']);
  }
  get_otp(){
    //debugger      
      this.loginservice.getOTP(this.chooseuserval,this.email).subscribe(data => {
        if (data != "No User") {
          console.log(data);
          //this.userData = data;        
          
        }
        else {
          
       
        }
  
      }, (err) => {
       
      });
    }
  
}
