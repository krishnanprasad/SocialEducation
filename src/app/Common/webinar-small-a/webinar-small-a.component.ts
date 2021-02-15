import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { LoginService } from 'src/app/Service/login.service';
@Component({
  selector: 'app-webinar-small-a',
  templateUrl: './webinar-small-a.component.html',
  styleUrls: ['./webinar-small-a.component.css']
})
export class WebinarSmallAComponent implements OnInit {
  webinardata: any;

  constructor(private router: Router, private modalService: ModalAService, private loginservice: LoginService) { }
  @Input() onlineclassdata;
  ngOnInit() {
    debugger
    this.webinardata = this.onlineclassdata;

  }

  GoToWebinarDetail(id) {
    this.router.navigate(['/Webinar', id]);
    // if (this.loginservice.IsLoggedIn) {
    //   this.router.navigate(['/WebinarDetails', id]);
    // }
    // else {
    //   this.router.navigate(['/Webinar', id]);

    // }
  }

  GoToPage(val) {
    //  if (this.loginservice.IsLoggedIn) {
    this.router.navigate([val + '/about']);
    // }
    //  else {
    //   this.openModal('login-modal')
    // }
  }

  onImgError(event) {
    event.target.src = '../../../assets/Image/employee1.jpg'
    //Do other stuff with the event.target
  }
  onImgErrorWebinar(event) {
    event.target.src = '../../../assets/Image/default_image_webinar.jpg'
    //Do other stuff with the event.target
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
