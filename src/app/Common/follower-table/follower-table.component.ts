import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-follower-table',
  templateUrl: './follower-table.component.html',
  styleUrls: ['./follower-table.component.css']
})
export class FollowerTableComponent implements OnInit {

  @Input('UserFriendList')  dataUserFriendList;
  public UserFriendList;
  public SearchFriends;
  constructor() {}

  ngOnInit() {
    this.UserFriendList = this.dataUserFriendList;
  }

}
