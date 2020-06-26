import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-card-b',
  templateUrl: './notification-card-b.component.html',
  styleUrls: ['./notification-card-b.component.css']
})
export class NotificationCardBComponent implements OnInit {
  filters = [];
  filtertoggle = { all: true, Webinar: false, Request: false };
  public NotificationList =
    [
      {
        NotificationId: 'not1',
        Message: 'Webinar/Accepted Your Post"',
        Time: '10:30',
        Icon: 'Accepted',
        notificationtype: 'Webinar',
      },
      {
        NotificationId: 'not2',
        Message: 'Request/Thanks for Rating',
        Time: '10:26',
        Icon: 'Accepted',
        notificationtype: 'Request'
      },
      {
        NotificationId: 'not3',
        Message: 'Webinar/Rejected for Webinar "Maximum algorithm in Physics"',
        Time: '09:48',
        Icon: 'Rejected',
        notificationtype: 'Webinar'
      },
      {
        NotificationId: 'not3',
        Message: 'Request/Rejected From Santhanam and their friends"',
        Time: '09:48',
        Icon: 'Rejected',
        notificationtype: 'Request'
      }
    ];
  @Input('UserNotificationList') dataNotificationList;

  constructor() { }

  ngOnInit() {
    //this.NotificationList = this.dataNotificationList;
    this.NotificationList = this.NotificationList;
  }
  chooseFilter(val) {
    debugger
    if (val == '') {
      this.filters = [];
      this.filtertoggle = { all: true, Webinar: false, Request: false };
      //  this.filtertoggle['all'] = !this.filtertoggle['all'];
    }
    else {
      this.filtertoggle[val] = !this.filtertoggle[val];
      var index = this.filters.findIndex(x => x == val)
      if (index === -1) {
        this.filters.push(val);
        this.filtertoggle['all'] = false;
      }
      else {

        this.filters = this.filters.filter(e => e !== val)
        if (this.filters.length == 0) {
          this.filtertoggle = { all: true, Webinar: false, Request: false };
        }
      }
    }

  }
  togglefilterclass(val) {

    return this.filtertoggle[val];
  }
}
