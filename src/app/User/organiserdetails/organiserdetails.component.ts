import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostListService } from 'src/app/post-list.service';

@Component({
  selector: 'app-organiserdetails',
  templateUrl: './organiserdetails.component.html',
  styleUrls: ['./organiserdetails.component.css']
})
export class OrganiserdetailsComponent implements OnInit {
  public value = 'Post';
  PostDetails: any;
  constructor(
    private route: ActivatedRoute,
    private _PostListService: PostListService,
  ) { }

  ngOnInit() {
    this.PostDetails = this._PostListService.getpostwalllist();
  }

}
