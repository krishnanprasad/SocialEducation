import { Component, OnInit } from '@angular/core';
import { UserFriendsService } from 'src/app/Service/user-friends.service';
import { UserInstitutionListPremiumService } from 'src/app/Service/user-institution-list-premium.service';
import { UserDetailsService } from 'src/app/Service/user-details.service';
import { LoginService } from 'src/app/Service/login.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  public value = 'Followers';
  public query;
  public UserFriendList;
  public UserPremiumInstitutionList;
  public MutualFriendDataList;
  followinglist: any;
  constructor(private dataUserFriendList: UserFriendsService,
    private _UserInstitutionList: UserInstitutionListPremiumService,
    private userService: UserDetailsService,
    private loginService:LoginService,
    private loaderService:LoaderAService
    ) {}

  ngOnInit() {
    this.get_followingList_INIT()
  }
  get_followingList_INIT() {
    this.loaderService.open();
    this.userService.get_followinglist(this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
        this.followinglist = data["result"];   
        this.loaderService.close();    
      }
      else if (data["status"] == 300) {
        this.loaderService.close();


      }
      else if (data["status"] == 400) {
        this.loaderService.close();
      }
    }, (err) => {

    });
  }
}
