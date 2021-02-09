import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/Service/user-details.service';
import { PostListService } from 'src/app/post-list.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';
import { LoginService } from 'src/app/Service/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ins-wall',
  templateUrl: './ins-wall.component.html',
  styleUrls: ['./ins-wall.component.css']
})
export class InsWallComponent implements OnInit {
  public CurrentComponent = 'Wall';
  public FilterPage;
  public PostDetails;
  pageid: any;
  constructor(private _PostListService: PostListService,private route: ActivatedRoute, private loader: LoaderAService, private loginService: LoginService) { }
  ChangeFilter(pagename) {
    console.log(pagename);
    this.CurrentComponent = pagename;
    this.FilterPage = pagename;
  }
  ngOnInit() {
    this.pageid = this.route.snapshot.params['pageid'];
    debugger
    this.PostDetails = this._PostListService.getinstitutionpostlist();
    this.FilterPage = this.CurrentComponent;
    console.log('Post Details' + this.PostDetails);
    this.loader.close();
  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.loginService.sendMessage(true);
  }

  clearMessage(): void {
    // clear message
    this.loginService.clearMessage();
  }
}
