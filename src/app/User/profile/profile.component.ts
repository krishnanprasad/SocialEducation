import { Component, OnInit, Input } from '@angular/core';
import { PostListService } from '../../post-list.service';
import { UserDetailsService } from '../../Service/user-details.service';
import { UserInstitutionListPremiumService } from 'src/app/Service/user-institution-list-premium.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() Edit;
  public Editable;
  public CurrentComponent = 'Wall';
  public FilterPage;
  PostDetails = [];
  public UserWallData;
  public UserPremiumInstitutionList;
  public UserNonPremiumInstitutionList;

  
  selectedvalueoffilter: any;
  // tslint:disable-next-line:max-line-length
  constructor(
    private _PostListService: PostListService,
    private _UserWallData: UserDetailsService,
    private _UserInstitutionList: UserInstitutionListPremiumService
  ) { }

  ngOnInit() {
    this.FilterPage = 'Wall';
    this.Editable = this.Edit;
    this.PostDetails = this._PostListService.getpostwalllist();
    this.UserWallData = this._UserWallData.getUserWallData();
    this.UserPremiumInstitutionList = this._UserInstitutionList.getUInstitutionPremium();
    this.UserNonPremiumInstitutionList = this._UserInstitutionList.getUInstitutionNonPremium();
  }
  ChangeFilter(pagename) {
    console.log(pagename);
    this.CurrentComponent = pagename;
    this.FilterPage = pagename;
  }
  selectedvalueoffilterA(e) {   
    this.selectedvalueoffilter = e;
  }
}
