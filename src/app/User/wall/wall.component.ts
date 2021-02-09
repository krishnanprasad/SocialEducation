import { Component, OnInit } from '@angular/core';
import { PostListService } from '../../post-list.service';
import { UserDetailsService } from '../../Service/user-details.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInstitutionListPremiumService } from 'src/app/Service/user-institution-list-premium.service';
import { LoginService } from 'src/app/Service/login.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  public CurrentComponent = 'Wall';
  public Editable = false;
  public webinarlist: any;
  public UserWallData;
  public UserPremiumInstitutionList;
  public UserNonPremiumInstitutionList;
  USERID: string;
  UserPageList: any;
  constructor(
    private route: ActivatedRoute,
    private _PostListService: PostListService,
    private usedetails: UserDetailsService,
    private _UserInstitutionList: UserInstitutionListPremiumService,
    private loginService: LoginService,
    private loaderService: LoaderAService,
    private router:Router
  ) { }
  public Page;
  public FilterPage;

  ChangeFilter(pagename) {
    console.log(pagename);
    this.CurrentComponent = pagename;
    this.FilterPage = pagename;
  }
  ngOnInit() {
    this.USERID = this.loginService.getUserId();
    this.FilterPage = 'Wall';

    debugger
    this.get_webinar_recommened_INIT();
    this.UserWallData = this.usedetails.getUserWallData();    
    // this.UserPremiumInstitutionList = this._UserInstitutionList.getUInstitutionPremium();
    //this.UserNonPremiumInstitutionList = this._UserInstitutionList.getUInstitutionNonPremium();

  }
  get_webinar_recommened_INIT() {

    this.usedetails.get_webinar_recommender(this.loginService.getUserId()).subscribe(data => {
      this.loaderService.open();
      if (data["status"] == 100) {
        debugger
        this.webinarlist = data["result"];
        this.get_pagelist();
        this.loaderService.close();
        //this.editUserDetailsBasic=this.UserDetailsBasic;
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
  }
  get_pagelist() {
    this.usedetails.get_user_pagelist(this.USERID).subscribe(data => {
      debugger
      if (data["status"] == 100) {
        this.UserPageList = data["result"];
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
  }
  GoToOrganiser(val) {
    this.router.navigate(['/'+val+'/about']);
  }
}
