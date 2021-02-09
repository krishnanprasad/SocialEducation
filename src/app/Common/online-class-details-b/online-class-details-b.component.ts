import { Component, OnInit } from '@angular/core';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
import { WebinarService } from 'src/app/Service/webinar.service';
import { registration } from 'src/app/class/registration';
import { UserDetailsService } from 'src/app/Service/user-details.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';

@Component({
  selector: 'app-online-class-details-b',
  templateUrl: './online-class-details-b.component.html',
  styleUrls: ['./online-class-details-b.component.css']
})
export class OnlineClassDetailsBComponent implements OnInit {
  studentinvitationlist = [
    { name: 'Sudhakar Sai' },
    { name: 'Kumaravel Ganeshan' },
    { name: 'Krishnan Kumar' },
    { name: 'Partheepan' }
  ];
  comments = [
    {
      date: '3-June-20 10:30PM',
      username: 'Ramkumar',
      comment: 'can we ask for QA'
    },
    {
      date: '3-June-20 10:30PM',
      username: 'Ramkumar',
      comment: 'can we ask for QA'
    },
    {
      date: '3-June-20 10:30PM',
      username: 'Ramkumar',
      comment: 'can we ask for QA'
    }
  ];
  webinarid: any;
  webinardetail: any;
  registerwebinar = new registration('', '', '', '', 0);
  Userid: any;
  showCommentBox: boolean = false; commentdetail: any;
  webinarcomments: any;
  ;
  constructor(private modalService: ModalAService, private router: Router, private route: ActivatedRoute,
    private loginService: LoginService, private webinarService: WebinarService, private userService: UserDetailsService,
    private loaderService: LoaderAService, private navigate: Router,
  ) { }

  ngOnInit() {
    this.webinarid = this.route.snapshot.params['id'];
    this.Userid = this.loginService.getUserId();
    debugger
    if (!this.loginService.IsLoggedIn) {
      this.Userid = '000000'
    }
    this.getWebinarDetails();
    this.loaderService.close();
  }
  GoToOrganiser(val) {
    this.router.navigate([val+'/home']);
  }
  getWebinarDetails() {
    //debugger
    this.loaderService.open();
    this.webinarService.get_WebinarDetails(this.webinarid, this.Userid, this.loginService.IsLoggedIn).subscribe(data => {
      if (data["status"] == 100) {
        this.webinardetail = data["result"];
        debugger
        this.webinardetail.topiclist = (this.webinardetail.topiclist).split(',');
        debugger
        this.getWebinarComments();
        this.loaderService.close();
      }
      else if (data["status"] == 300) {


      }
      else if (data["status"] == 400) {

      }
    }, (err) => {

    });

  }

  getWebinarComments() {
    //debugger
    this.webinarService.get_WebinarComments(this.webinarid, this.Userid).subscribe(data => {
      if (data["status"] == 100) {
        this.webinarcomments = data["result"];
        this.loaderService.close();
      }
      else if (data["status"] == 300) {


      }
      else if (data["status"] == 400) {

      }
    }, (err) => {

    });

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
        this.loaderService.open();
        setTimeout(() => {
          this.loaderService.close();
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
  navigatepayment() {
    debugger
    this.registerwebinar.webinarid = this.webinarid;
    this.registerwebinar.participantid = this.loginService.getUserId();
    this.registerwebinar.registration_status = 1;

    if (this.webinardetail.webinarfee > 0) {
      this.navigate.navigate(['/User/Payment', this.webinardetail.webinarid]);
      //this..navigate(['/User/Payment'], { queryParams: { id: } });
    }
    if (this.webinardetail.webinarfee == 0) {
      this.webinarService.register_webinar(this.registerwebinar).subscribe(data => {
        if (data["status"] == 100) {
          this.webinardetail = data["result"];
          this.getWebinarDetails();
          this.closeModal('session-registration');
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

  }


  openModal(id: string) {
    if (id == 'session-registration') {
      if (this.loginService.IsLoggedIn == true && this.loginService.isUserParticipant() == true) {
        this.modalService.open(id);
      }
      else {
        this.modalService.open('login-first');
      }
    }

  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  GoToRegistration(){
    this.router.navigateByUrl('/SignUp');
  }
}
