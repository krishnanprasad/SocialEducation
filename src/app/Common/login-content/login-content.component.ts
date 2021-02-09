import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.css']
})
export class LoginContentComponent implements OnInit {
  public value = 'Login';
  usertype: any = 'student';
  chooseuserval: number;
  public email: string;
  public otpnumber: number;
  public passcode: string;
  public myObj: { usertype: number; userid: string; };
  errormessage_wrongpasscode: boolean = false;
  constructor(private router: Router, private loginservice: LoginService, private modalService: ModalAService,
    private loaderService: LoaderAService
  ) { }

  ngOnInit() {
  }
  radioChange(e) {
    this.usertype = (e.target.value);
    this.chooseuserval = (e.target.value);
    //console.log('usertype='+this.usertype);
  }
  success_Credentials() {
    this.loginservice.setUserDetails(this.myObj);
    if (this.myObj.usertype == 2) {
      debugger
      // var myObj = { usertype: 2, userid: false };
      this.loginservice.sendMessage(false)
      sessionStorage.setItem('usertype', JSON.stringify(this.myObj));
      this.loginservice.loginsuccess();
      //this.router.navigate(['/Institution/Wall']);
      this.closeModal('login-modal')
    }
    else {
      debugger
      this.loginservice.sendMessage(true)
      // var myObj = { usertype: 1, isstudent: true };
      sessionStorage.setItem('usertype', JSON.stringify(this.myObj));
      this.loginservice.loginsuccess();
      this.clearinput();
      //this.router.navigate(['/User/Wall']);
      this.closeModal('login-modal')
    }
  }
  clearinput() {
    this.email = "";
    this.passcode = "";
  }

  get_otp() {
    //debugger
    this.closeModal('login-modal')
    this.loginservice.getOTP(this.chooseuserval, this.email).subscribe(data => {
      if (data["status"] == 100) {
        //debugger
        console.log(data);
        //this.userData = data;        
        this.openModal('enter-otp')
      }
      else if (data["status"] == 300) {
        //debugger
        this.closeModal('login-modal')
        this.openModal('enter-passcode')
      }
    }, (err) => {

    });
  }
  forgotpasscode() {
    this.router.navigate(['/ForgotPasscode']);
  }
  register() {
    this.router.navigate(['/SignUp']);
  }
  verifypasscode() {
    // debugger
    this.loaderService.open();
    this.loginservice.verifypasscode(this.chooseuserval, this.email, this.passcode).subscribe(data => {

      if (data["status"] == 100) {
        //debugger
        this.errormessage_wrongpasscode = false;
        this.myObj = { usertype: data["result"]["usertype"], userid: data["result"]["userid"] };
        this.success_Credentials()
        //sessionStorage.setItem('usertype', JSON.stringify(this.myObj));
        //Session Store and Move to Home page based on Usertype

        this.closeModal('login-modal')

      }
      else if (data["status"] == 300) {
        //debugger
        this.errormessage_wrongpasscode = true;
        this.loaderService.close();
        //Show wrong passcode message

      }
      else if (data["status"] == 400) {
        this.loaderService.close();
        this.closeModal('login-modal')
        this.openModal('enter-passcode')

      }
    }, (err) => {

    });
  }
  // verifyotp() {
  //   debugger
  //   this.loginservice.verifyOTP(this.chooseuserval, this.email,this.otpnumber,null).subscribe(data => {
  //     if (data["status"] == 100) {
  //       debugger
  //       console.log(data);              
  //       this.closeModal('login-modal')       
  //     }
  //     else if (data["status"] == 300) {
  //       this.closeModal('login-modal')
  //       this.openModal('enter-otp')
  //     }
  //     else if (data["status"] == 400) {
  //       this.closeModal('login-modal')
  //       this.openModal('enter-passcode')
  //     }
  //   }, (err) => {

  //   });
  // }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

