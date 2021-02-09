import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/notification.service';
import { RequestServiceService } from 'src/app/Service/request-service.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';
import { WebinarService } from 'src/app/Service/webinar.service';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public value = 'notfication';
  public paymentlist:any;
  public UserNotificationList;
  
  public FriendRequestList;
  constructor(private _NotificationService: NotificationService, private _userRequestService: RequestServiceService,
    private loaderService:LoaderAService,
    private webinar:WebinarService,
    private loginService:LoginService
    ) {}

  ngOnInit() {
    this.loaderService.open();
    this.get_paymentlist_INIT();
    this.UserNotificationList = this._NotificationService.getNotificationListData();
    
    this.FriendRequestList = this._userRequestService.getRequestList();
    this.loaderService.close();
  }

  get_paymentlist_INIT(){
    this.webinar.get_payment_list(this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
        this.paymentlist= data["result"];
        
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
