import { Component, OnInit, Input } from "@angular/core";
import { FormsModule } from '@angular/forms';
@Component({
  selector: "app-user-detail-a",
  templateUrl: "./user-detail-a.component.html",
  styleUrls: ["./user-detail-a.component.css"]
})
export class UserDetailAComponent implements OnInit {
  @Input('UserFriendList')  dataUserFriendList;
  public UserFriendList;
  public SearchFriends;
  constructor() {}

  ngOnInit() {
    this.UserFriendList = this.dataUserFriendList;
  }
}
