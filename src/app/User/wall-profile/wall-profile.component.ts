import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wall-profile',
  templateUrl: './wall-profile.component.html',
  styleUrls: ['./wall-profile.component.css']
})
export class WallProfileComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('UserWallData') dataUserWallData;
  // tslint:disable-next-line:no-input-rename
  @Input('Editable') dataEditable;
  public UserWallData;
  constructor() { }
  public dataEditableItems: {
    username: boolean ;
    userstatus: boolean ;
    usergrade: boolean ;
  };
  ngOnInit() {
    this.dataEditableItems = { username: false, userstatus: false , usergrade: false};
    this.UserWallData = this.dataUserWallData;
  }
  MakeEditable(item) {
    switch (item) {
      case 'username':
      this.dataEditableItems.username = ! this.dataEditableItems.username;
        break;
      case 'userstatus':
      this.dataEditableItems.userstatus = ! this.dataEditableItems.userstatus;
        break;
      case 'usergrade':
      this.dataEditableItems.usergrade = ! this.dataEditableItems.usergrade;
        break;
      default:
        confirm('Sorry, that color is not in the system yet!');
    }
  }

}
