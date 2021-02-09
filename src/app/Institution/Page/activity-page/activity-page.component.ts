import { Component, OnInit } from '@angular/core';
import { PostListService } from 'src/app/post-list.service';
import { adminWebinarService } from 'src/app/Service/adminWebinar.service';
import { LoginService } from 'src/app/Service/login.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class InsActivityPageComponent implements OnInit {
  PostDetails: any;
  studentinvitationlist = [
    { name: 'Sudhakar Sai', status: 0, type: 'student' },
    { name: 'Kumaravel Ganeshan', status: 0, type: 'working' },
    { name: 'Krishnan Kumar', status: 1, type: 'student' },
    { name: 'Partheepan', status: 1, type: 'working' }
  ]
  participantlist: any;
  myCount: any;
  pageid: any;
  constructor(private _adminwebservice: adminWebinarService,
    private route: ActivatedRoute, private loginService: LoginService, private loader: LoaderAService) { }

  ngOnInit() {
    this.pageid = this.route.parent.snapshot.params["pageid"];
    this.get_Webinarlist_INIT();
    this.loader.close();

  }
  get_Webinarlist_INIT() {
    debugger
    this._adminwebservice.get_WebinarList_Activity(this.pageid).subscribe(data => {
      if (data["status"] == 100) {
        debugger
        this.PostDetails = data["result"];
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

  get_participantlist() {
    debugger
    this._adminwebservice.get_WebinarList_Activity(this.pageid).subscribe(data => {
      if (data["status"] == 100) {
        debugger
        this.PostDetails = data["result"];
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
  getparticipantid(webinarid) {
    debugger

    if (webinarid != null) {
      this._adminwebservice.get_Webinar_UserList(webinarid).subscribe(data => {
        if (data["status"] == 100) {
          debugger
          //this.participantlist = this.studentinvitationlist;
          this.participantlist = data["result"];
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
}
