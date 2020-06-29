import { Component, OnInit } from '@angular/core';
import { UserFriendsService } from 'src/app/Service/user-friends.service';
import { UserInstitutionListPremiumService } from 'src/app/Service/user-institution-list-premium.service';

@Component({
  selector: 'app-follow-page',
  templateUrl: './follow-page.component.html',
  styleUrls: ['./follow-page.component.css']
})
export class FollowPageComponent implements OnInit {

  public value = 'Users';
  public query;
  public UserFriendList;
  public UserPremiumInstitutionList;
  constructor(private dataUserFriendList: UserFriendsService,
    private _UserInstitutionList: UserInstitutionListPremiumService
    ) {}

  ngOnInit() {
    console.log('Follow Page Coming Inside');
    this.UserFriendList = this.dataUserFriendList.getuserfriendsList();
    this.UserPremiumInstitutionList = this._UserInstitutionList.getUInstitutionPremium();
  }
}
