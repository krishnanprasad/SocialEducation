import { Component, OnInit } from '@angular/core';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';

@Component({
  selector: 'app-forgot-passcode',
  templateUrl: './forgot-passcode.component.html',
  styleUrls: ['./forgot-passcode.component.css']
})
export class ForgotPasscodeComponent implements OnInit {
  showsteps = { isOTPsent: false, isOTPverified: false }
  public Answer;
  public Email;
  public newpassword;
  constructor(private modalService: ModalAService) { }

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
  sendOTP() {
    this.showsteps.isOTPsent = true;
  }
  verifyOTP() {
    this.showsteps.isOTPverified = true;
  }
}
