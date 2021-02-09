import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
import { UserDetailsService } from 'src/app/Service/user-details.service';

@Component({
  selector: 'app-institution-main-page',
  templateUrl: './institution-main-page.component.html',
  styleUrls: ['./institution-main-page.component.css']
})
export class InstitutionMainPageComponent implements OnInit {
  UserWallData: any;
  USERID: string;
  pageid: any;
  ISADMIN: any;
  constructor(private router: Router, private route: ActivatedRoute,
    private usedetails: UserDetailsService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.USERID = this.loginService.getUserId();
    this.pageid = this.route.snapshot.params['pageid'];
    this.checkadminstatus();
  }
  goto(val) {
    this.router.navigate([val], { relativeTo: this.route });
  }
  checkadminstatus() {
    this.usedetails.get_isuseradmin(this.pageid, this.USERID).subscribe(data => {
    
      if (data["status"] == 100) {
        this.ISADMIN = data["result"]["isAdmin"];
       debugger;
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
  }
}
