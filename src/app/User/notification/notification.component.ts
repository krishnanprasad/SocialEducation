import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/notification.service';
import { RequestServiceService } from 'src/app/Service/request-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public value = 'Notifications';
  public query;
  public UserNotificationList;
  
  public FriendRequestList;
  constructor(private _NotificationService: NotificationService, private _userRequestService: RequestServiceService) {}

  ngOnInit() {
    this.UserNotificationList = this._NotificationService.getNotificationListData();
    
    this.FriendRequestList = this._userRequestService.getRequestList();
  }
}
