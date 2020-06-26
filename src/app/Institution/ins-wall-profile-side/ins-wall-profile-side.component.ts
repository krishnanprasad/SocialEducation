import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ins-wall-profile-side',
  templateUrl: './ins-wall-profile-side.component.html',
  styleUrls: ['./ins-wall-profile-side.component.css']
})
export class InsWallProfileSideComponent implements OnInit {

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
