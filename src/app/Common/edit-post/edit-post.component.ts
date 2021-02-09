import { Component, OnInit } from '@angular/core';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { LoginService } from 'src/app/Service/login.service';
import { WebinarService } from 'src/app/Service/webinar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { adminWebinarService } from 'src/app/Service/adminWebinar.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';
import { webinar } from 'src/app/class/webinar';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  modal: string = "modal modal-close";
  isOpen: boolean = false;
  webinarid: any;
  webinardetails = new webinar();
  participantlist: any;
  web_fee_type: string;

  constructor(
    private modalService: ModalAService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService, private webinarService: WebinarService,
    private _adminwebservice: adminWebinarService,
    private loader: LoaderAService
  ) { }

  ngOnInit() {
    this.webinarid = this.route.snapshot.params['id'];
    this.getWebinarDetails()
    this.get_participantlist()
    this.loader.close()
  }
  getWebinarDetails() {
    //debugger
    this._adminwebservice.get_edit_WebinarDetails_admin(this.webinarid, this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
        this.webinardetails = data["result"];
        this.webinardetails.topiclist = this.webinardetails.topiclist.split(',');
        if (this.webinardetails.webinarfee == 0) {
          this.web_fee_type = '1';
        }
        else {
          this.web_fee_type = '2';
        }
        debugger
        //this.getWebinarDetails()
      }
      else if (data["status"] == 300) {


      }
      else if (data["status"] == 400) {

      }
    }, (err) => {

    });
  }

  get_participantlist() {
    // debugger
    this._adminwebservice.get_Webinar_UserList(this.webinarid).subscribe(data => {
      if (data["status"] == 100) {
        //  debugger
        this.participantlist = data["result"];
      }
      else if (data["status"] == 300) {
        //    debugger


      }
      else if (data["status"] == 400) {
        //   debugger
      }
    }, (err) => {

    });
  }
  updatePost() {
    debugger
    this.webinardetails.createdby = this.loginService.getUserId();
    this.webinardetails.topiclist = this.webinardetails.topiclist.toString();

    this.webinarService.update_webinar(this.webinardetails).subscribe(data => {
      //debugger
      if (data["status"] == 100) {

        this.router.navigate(['/Institution/Wall']);
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
    //return null;    
  }
}
