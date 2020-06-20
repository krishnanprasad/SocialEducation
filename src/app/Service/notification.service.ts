import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public NotificationList =
    [
      {
        NotificationId: 'not1',
        Message: 'Accepted Your Post"',
        Time: '10:30',
        Icon: 'Accepted',
      },
      {
        NotificationId: 'not2',
        Message: 'Thanks for Rating',
        Time: '10:26',
        Icon: 'Accepted',
      },
      {
        NotificationId: 'not3',
        Message: 'Rejected for Webinar "Maximum algorithm in Physics"',
        Time: '09:48',
        Icon: 'Rejected',
      }
    ];

  public LogsList =
    [
      {
        LogsId: 'log1',
        Message: 'You commented on your own post',
        Time: '10:30',
        Icon: 'assets/Image/Icons/comment0.png',
      },
      {
        NotificationId: 'log2',
        Message: 'You Test score is 20',
        Time: '10:26',
        Icon: 'assets/Image/Icons/test1.png',
      },
      {
        NotificationId: 'log3',
        Message: 'You Test score is 20 in Group 4 Test 14',
        Time: '09:48',
        Icon: 'assets/Image/Icons/test1.png',
      }
    ];

  getNotificationListData() {
    return this.NotificationList;
  }

  getLogsListData() {
    return this.LogsList;
  }
  constructor() { }
}
