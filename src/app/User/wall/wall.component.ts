import { Component, OnInit } from '@angular/core';
import { PostListService } from '../../post-list.service';
import { UserDetailsService } from '../../Service/user-details.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { UserInstitutionListPremiumService } from 'src/app/Service/user-institution-list-premium.service';
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  public CurrentComponent = 'Wall';
  public Editable = false;
  PostDetails = [];
  public UserWallData;
  public UserPremiumInstitutionList;
  public UserNonPremiumInstitutionList;
  constructor(
    private route: ActivatedRoute,
    private _PostListService: PostListService,
    private _UserWallData: UserDetailsService,
    private _UserInstitutionList: UserInstitutionListPremiumService
  ) {}
  public Page;
  public FilterPage;

  ChangeFilter(pagename) {
    console.log(pagename);
    this.CurrentComponent = pagename;
    this.FilterPage = pagename;
  }
  ngOnInit() {
    this.FilterPage = 'Wall';
    // this.route.paramMap.subscribe(params => {
    //   this.FilterPage = params.get('Page');
    // });
    this.PostDetails = this._PostListService.getpostwalllist();
    this.UserWallData = this._UserWallData.getUserWallData();
    this.UserPremiumInstitutionList = this._UserInstitutionList.getUInstitutionPremium();
    this.UserNonPremiumInstitutionList = this._UserInstitutionList.getUInstitutionNonPremium();
  }
}
