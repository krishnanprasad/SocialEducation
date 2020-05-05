import { Component, OnInit } from '@angular/core';
import { UserFriendsService } from 'src/app/Service/user-friends.service';
import { UserInstitutionListPremiumService } from 'src/app/Service/user-institution-list-premium.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  public value = 'Institution';
  public query;
  public UserFriendList;
  public UserPremiumInstitutionList;
  public MutualFriendDataList;
  constructor(private dataUserFriendList: UserFriendsService,
    private _UserInstitutionList: UserInstitutionListPremiumService
    ) {}

  ngOnInit() {
    this.UserFriendList = this.dataUserFriendList.getuserfriendsList();
    this.UserPremiumInstitutionList = this._UserInstitutionList.getUInstitutionPremium();
    this.MutualFriendDataList = this.dataUserFriendList.getuserfriendsList();
  }
}
