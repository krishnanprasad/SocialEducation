import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/notification.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  public UserLogsList;
  constructor(private _NotificationService: NotificationService, ) { }

  ngOnInit() {
    this.UserLogsList = this._NotificationService.getLogsListData();
  }

}
