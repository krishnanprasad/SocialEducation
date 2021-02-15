import { Component, OnInit } from '@angular/core';
import { oraganiserService } from 'src/app/Service/oraganiser.service ';
import { LoginService } from 'src/app/Service/login.service';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from 'src/app/Service/user-details.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  organiserid: any;
  pageid: any;

  constructor(private organiserService: oraganiserService, private loginService: LoginService
    , private modalService: ModalAService, private route: ActivatedRoute, private userService: UserDetailsService) { }
  editUserDetailsBasic: any;
  organiserProfileBasic: any;
  ngOnInit() {
    //debugger
    this.pageid = this.route.snapshot.params['pageid'];
    this.get_profiledetails_user_INIT();
    debugger

  }
  editProfile() {
    this.openModal('edit-organiser-profile');
  }
  followProfile(val) {
     debugger
    this.userService.follow_organiser(this.loginService.getUserId(), this.pageid, val).subscribe(data => {
      if (data["status"] == 100) {
        debugger;
        this.closeModal('edit-organiser-profile');
        this.ngOnInit();
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
  }
  get_profiledetails_user_INIT() {    
    this.organiserService.get_page_profile(this.pageid, this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
        this.organiserProfileBasic = data["result"];        
        this.editUserDetailsBasic = this.organiserProfileBasic;
        //debugger
      }
      else if (data["status"] == 300) {
        // debugger


      }
      else if (data["status"] == 400) {
        //  debugger
      }
    }, (err) => {

    });
  }
  get_profiledetails_admin_INIT() {
    this.organiserService.get_organiser_admin_Profile(this.loginService.getUsertype(), this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
        this.organiserProfileBasic = data["result"];
        //debugger
        this.editUserDetailsBasic = this.organiserProfileBasic;
      }
      else if (data["status"] == 300) {
        // debugger


      }
      else if (data["status"] == 400) {
        //  debugger
      }
    }, (err) => {

    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  saveprofile() {
    this.editUserDetailsBasic.userid = this.loginService.getUserId();
    this.editUserDetailsBasic.usertype = this.loginService.getUsertype();
    // debugger
    var editUserJson = JSON.stringify(this.editUserDetailsBasic)
    this.organiserService.edit_organiser_profile(editUserJson).subscribe(data => {
      if (data["status"] == 100) {
        //  debugger;
        this.closeModal('edit-organiser-profile');
        this.ngOnInit();
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
  }
}
