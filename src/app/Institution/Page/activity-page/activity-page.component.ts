import { Component, OnInit } from '@angular/core';
import { PostListService } from 'src/app/post-list.service';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class InsActivityPageComponent implements OnInit {
  PostDetails: any;
  studentinvitationlist = [
    { name: 'Sudhakar Vignesh' },
    { name: 'Kumaravel Ganeshan' },
    { name: 'Krishnan Kumar' },
    { name: 'Partheepan' }
  ]
  participantlist: any;
  myCount: any;
  constructor(private _PostListService: PostListService) { }

  ngOnInit() {
    this.PostDetails = this._PostListService.getinstitutionpostlist();
  }

  getparticipantid(webinarid) {
    
    if (webinarid != null) {
      this.participantlist = this.studentinvitationlist;
    }
  }
}
