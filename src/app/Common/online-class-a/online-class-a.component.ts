import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-online-class-a',
  templateUrl: './online-class-a.component.html',
  styleUrls: ['./online-class-a.component.css']
})
export class OnlineClassAComponent implements OnInit {
  webinardata: any;

  constructor(private router: Router, private modalService: ModalAService, private loginservice: LoginService) { }
  @Input() onlineclassdata;
  ngOnInit() {   
    this.webinardata = this.onlineclassdata;
  debugger
  }

  GoToWebinarDetail(id) {

    if (this.loginservice.IsLoggedIn) {
      this.router.navigate(['/User/WebinarDetails', id]);
    }
    else {
      this.router.navigate(['/Webinar', id]);

    }
  }
  viewOrganiser(val) {
    //  if (this.loginservice.IsLoggedIn) {
    this.router.navigate(['/O', val]);
    // }
    //  else {
    //   this.openModal('login-modal')
    // }
  }




  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
