import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/notification.service';
import { PostListService } from 'src/app/post-list.service';
import { UserDetailsService } from 'src/app/Service/user-details.service';
import { LoginService } from 'src/app/Service/login.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  public UserLogsList;
  PostDetails: any;
  activityList: any;
  activitydata: any;

  constructor(private _NotificationService: NotificationService,
    private _PostListService: PostListService,
    private userService: UserDetailsService,
    private loginService: LoginService,
    private loaderService: LoaderAService
  ) { }

  ngOnInit() {
    this.loaderService.close();
    this.get_WebinarList_INIT()
    // this.UserLogsList = this._NotificationService.getLogsListData();
    // this.PostDetails = this._PostListService.getpostwalllist();
    this.loaderService.close();
  }
  get_WebinarList_INIT() {
    this.loaderService.open();
    this.get_Activitydata_INIT();
    this.userService.get_webinarlist(this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
        this.activityList = data["result"];
        this.loaderService.close();
      }
      else if (data["status"] == 300) {
        this.loaderService.close();


      }
      else if (data["status"] == 400) {
        this.loaderService.close();
      }
    }, (err) => {

    });
  }
  get_Activitydata_INIT(){
    this.userService.get_user_activity_data(this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
        this.activitydata= data["result"];
        
      }
      else if (data["status"] == 300) {
        this.loaderService.close();


      }
      else if (data["status"] == 400) {
        this.loaderService.close();
      }
    }, (err) => {

    });
    
  }
}
