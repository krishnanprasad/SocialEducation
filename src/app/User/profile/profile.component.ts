import { Component, OnInit, Input } from '@angular/core';
import { PostListService } from '../../post-list.service';
import { UserDetailsService } from '../../Service/user-details.service';
import { UserInstitutionListPremiumService } from 'src/app/Service/user-institution-list-premium.service';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { LoginService } from 'src/app/Service/login.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';

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
  public UserDetailsBasic: any;

  selectedvalueoffilter: any;
  editUserDetailsBasic: any;
  editUserJson: string;
  // tslint:disable-next-line:max-line-length
  constructor(
    private _PostListService: PostListService,
    private loader: LoaderAService,
    private _UserInstitutionList: UserInstitutionListPremiumService,
    private modalService: ModalAService,
    private loginService: LoginService,
    private userdetails: UserDetailsService
  ) { }

  ngOnInit() {
    // this.FilterPage = 'Wall';
    // this.Editable = this.Edit;
    this.getUserBasic_INIT();
    this.editUserDetailsBasic = this.UserDetailsBasic;
    this.loader.close();
    // this.PostDetails = this._PostListService.getpostwalllist();
    // this.UserWallData = this._UserWallData.getUserWallData();
    // this.UserPremiumInstitutionList = this._UserInstitutionList.getUInstitutionPremium();
    // this.UserNonPremiumInstitutionList = this._UserInstitutionList.getUInstitutionNonPremium();
  }
  ChangeFilter(pagename) {
    console.log(pagename);
    this.CurrentComponent = pagename;
    this.FilterPage = pagename;
  }
  editprofile() {
    this.openModal('edit-profile');
  }
  selectedvalueoffilterA(e) {
    this.selectedvalueoffilter = e;
  }
  saveprofile() {
    this.editUserDetailsBasic.address = null;
    this.editUserJson = JSON.stringify(this.editUserDetailsBasic)
    this.userdetails.edit_user_basic(this.editUserJson).subscribe(data => {
      if (data["status"] == 100) {
        debugger;
        this.UserDetailsBasic = data["result"];
        this.editUserDetailsBasic = this.UserDetailsBasic;
        this.closeModal('edit-profile');
        this.ngOnInit();
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
  }
  edittopic
  getUserBasic_INIT() {
  //  debugger
    this.userdetails.get_user_basic(this.loginService.getUsertype(), this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
     //   debugger;
        this.UserDetailsBasic = data["result"];
        this.editUserDetailsBasic = this.UserDetailsBasic;
//debugger
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });

  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
