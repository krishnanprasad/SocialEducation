import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public NotificationList =
  [
  {
    NotificationId: 'not1',
    Message: 'Krishnan RA commented on your post "Where there is a will there is a way"',
    Time: '10:30',
    Icon: 'assets/Image/Icons/comment1.png',
  },
  {
    NotificationId: 'not2',
    Message: 'Pavithra liked your post',
    Time: '10:26',
    Icon: 'assets/Image/Icons/like1.png',
  },
  {
    NotificationId: 'not3',
    Message: 'Saravana Kumar has Joining the Event "Trends in Auntonomous Cars"',
    Time: '09:48',
    Icon: 'assets/Image/Icons/joining1.png',
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
