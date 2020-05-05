import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/Service/user-details.service';
import { PostListService } from 'src/app/post-list.service';

@Component({
  selector: 'app-ins-wall',
  templateUrl: './ins-wall.component.html',
  styleUrls: ['./ins-wall.component.css']
})
export class InsWallComponent implements OnInit {
  public CurrentComponent = 'Wall';
  public FilterPage;
  public PostDetails;
  constructor( private _PostListService: PostListService ) { }
  ChangeFilter(pagename) {
    console.log(pagename);
    this.CurrentComponent = pagename;
    this.FilterPage = pagename;
  }
  ngOnInit() {
    this.PostDetails = this._PostListService.getinstitutionpostlist();
    this.FilterPage = this.CurrentComponent;
    console.log('Post Details' + this.PostDetails);
  }

}
