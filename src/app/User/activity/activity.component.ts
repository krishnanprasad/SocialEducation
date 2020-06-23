import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/notification.service';
import { PostListService } from 'src/app/post-list.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  public UserLogsList;
  PostDetails: any;

  constructor(private _NotificationService: NotificationService,
    private _PostListService: PostListService,
  ) { }

  ngOnInit() {
    this.UserLogsList = this._NotificationService.getLogsListData();
    this.PostDetails = this._PostListService.getpostwalllist();
  }

}
