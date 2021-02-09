import { Component, OnInit } from '@angular/core';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { LoginService } from 'src/app/Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  chooseuserval: number;
  showsteps = { isOTPsent: false, isOTPverified: false }
  public emailaddress: string;
  public otpnumber: string;
  public passcode: string;
  myOTP: any;
  passcodeA: string;
  passcodeB: string;
  constructor(private modalService: ModalAService, private loginservice: LoginService,private router:Router) { }

  ngOnInit() {
    this.closeModal('login-modal')
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  ForgotPassowd() {
  }


  get_otp() {
   // debugger

    //this.closeModal('login-modal')
    if (this.emailaddress != undefined && this.chooseuserval != null) {
      this.loginservice.getOTP(this.chooseuserval, this.emailaddress).subscribe(data => {
        if (data["status"] == 100) {
          //debugger
          this.showsteps.isOTPsent = true;
          this.myOTP = data["result"]["otp"]
          //debugger
          console.log('myOTP' + this.myOTP);
          //this.userData = data;        
         // this.openModal('enter-otp')
        }
        else if (data["status"] == 300) {
         // debugger
         // this.closeModal('login-modal')
          //this.openModal('enter-passcode')
        }
      }, (err) => {

      });
    }
  }
  createuser() {
    debugger
    if (this.passcodeB == this.passcodeA) {
      this.passcode = this.passcodeA;
    }
    else {
      alert("Passcode doesn't match");
    }
    if (this.emailaddress != undefined && this.chooseuserval != null && this.otpnumber != undefined && this.passcode != undefined) {
      this.loginservice.verifyOTP(this.chooseuserval, this.emailaddress, this.otpnumber, this.passcode).subscribe(data => {
        if (data["status"] == 100) {
          this.router.navigate(['/']);
        }
        else if (data["status"] == 300) {
        //  debugger
          alert("OTP doesn't match");
        }
        else if (data["status"] == 400) {
       //   debugger
          alert("Some Problem");
        }
      }, (err) => {

      });
    }
    else {
      alert('You are missing out something');
    }
  }
}
