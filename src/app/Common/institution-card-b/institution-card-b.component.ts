import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsService } from 'src/app/Service/user-details.service';
import { LoginService } from 'src/app/Service/login.service';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';

@Component({
  selector: 'app-institution-card-b',
  templateUrl: './institution-card-b.component.html',
  styleUrls: ['./institution-card-b.component.css']
})
export class InstitutionCardBComponent implements OnInit {

  public Institution;
  @Input('datafollowinglist') dataorganiserlist;
  public SearchFollowers;
  organiserlist: any;
  constructor(private router: Router, private route: ActivatedRoute,
    private loaderService: LoaderAService,
    private userService: UserDetailsService, private loginService: LoginService) { }

  ngOnInit() {
    debugger
    console.log('organiserlist--' + this.dataorganiserlist)
    debugger
    this.organiserlist = this.dataorganiserlist;

  }
  GoToOrganiser(val) {
    this.router.navigate([val+'/about']);
  }

  followProfile(organiserid, val) {
    this.loaderService.open();
    this.userService.follow_organiser(this.loginService.getUserId(), organiserid, val).subscribe(data => {
      if (data["status"] == 100) {       
        this.loaderService.close();
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
  }

}
