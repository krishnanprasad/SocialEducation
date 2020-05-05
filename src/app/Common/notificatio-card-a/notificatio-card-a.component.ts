import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notificatio-card-a',
  templateUrl: './notificatio-card-a.component.html',
  styleUrls: ['./notificatio-card-a.component.css']
})
export class NotificatioCardAComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('UserNotificationList') dataNotificationList;
  public NotificationList;
  constructor() {}

  ngOnInit() {
    this.NotificationList = this.dataNotificationList;
  }
}
