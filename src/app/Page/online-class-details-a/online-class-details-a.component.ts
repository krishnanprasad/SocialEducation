import { Component, OnInit } from '@angular/core';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { LoginService } from 'src/app/Service/login.service';
import { WebinarService } from 'src/app/Service/webinar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { adminWebinarService } from 'src/app/Service/adminWebinar.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';
@Component({
  selector: 'app-online-class-details-a',
  templateUrl: './online-class-details-a.component.html',
  styleUrls: ['./online-class-details-a.component.css']
})
export class OnlineClassDetailsAComponent implements OnInit {
  modal: string = "modal modal-close";
  isOpen: boolean = false;
  webinarid: any;
  Userid: any;
  webinardetail: any;
  participantlist: any;
  showCommentBox: boolean = false; commentdetail: any;
  webinarcomments: any;
  constructor(
    private modalService: ModalAService, 
    private router: Router, 
    private route: ActivatedRoute,
    private loginService: LoginService, private webinarService: WebinarService,
    private _adminwebservice:adminWebinarService,
    private loader:LoaderAService
    
  ) { }
  public onlineclassdata = {
    webinarid: 'POS0005',
    UserImage: 'assets/Image/unknown1.jpg',
    UserName: 'Sriram',
    CommunityFrom: 'MCT 2014',
    fee: 0,
    ImageSrc: '',
    platform: 'Zoom',
    status: 1,
  };
  ngOnInit() {
    this.webinarid = this.route.snapshot.params['id'];
    this.Userid = this.loginService.getUserId();
    this.getWebinarDetails()
    this.get_participantlist()
    this.loader.close()
  }
  showcomment() {
    this.showCommentBox = true;
  }
  addcomment() {
    debugger
    this.webinarService.add_comment(this.Userid, this.webinarid, this.commentdetail).subscribe(data => {
      if (data["status"] == 100) {
        this.webinardetail = data["result"];
        this.commentdetail = "";
        this.loader.open();
        setTimeout(() => {
          this.loader.close();
        },
          3000);


      }
      else if (data["status"] == 300) {
        debugger


      }
      else if (data["status"] == 400) {
        debugger
      }
    }, (err) => {

    });
  }
  getWebinarComments() {
    //debugger
    this.webinarService.get_WebinarComments(this.webinarid, this.Userid).subscribe(data => {
      if (data["status"] == 100) {
        this.webinarcomments = data["result"];
        this.loader.close();
      }
      else if (data["status"] == 300) {


      }
      else if (data["status"] == 400) {

      }
    }, (err) => {

    });

  }
  getWebinarDetails() {
    //debugger
    this._adminwebservice.get_WebinarDetails_admin(this.webinarid, this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
        this.webinardetail = data["result"];
        this.webinardetail.topiclist = this.webinardetail.topiclist.split(',');
        this.getWebinarComments();
      }
      else if (data["status"] == 300) {
     

      }
      else if (data["status"] == 400) {
     
      }
    }, (err) => {

    });    
  }

  get_participantlist(){
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
 
  editWebinar(id) {
    this.router.navigate(['/Institution/editPost/'+id]);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  
}
