import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/notification.service';
import { RequestServiceService } from 'src/app/Service/request-service.service';

@Component({
  selector: 'app-ins-notification',
  templateUrl: './ins-notification.component.html',
  styleUrls: ['./ins-notification.component.css']
})
export class InsNotificationComponent implements OnInit {

  public value = 'Notifications';
  public UserNotificationList;
  constructor(private _NotificationService: NotificationService, private _userRequestService: RequestServiceService) {}

  ngOnInit() {
    this.UserNotificationList = this._NotificationService.getNotificationListData();
    
  }

}
