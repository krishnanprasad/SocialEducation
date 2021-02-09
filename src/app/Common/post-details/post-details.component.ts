import { Component, OnInit } from '@angular/core';
import { SingleQuestionPaperDataService } from 'src/app/Service/single-question-paper-data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public PostDetails;
  FriendsInterested = [
    {
      Name: 'Windstorm',
      Time: '10:30 am',
      CommunityNameFrom: 'MCT2014',
      CommunityId: ''
    },
    {
      Name: 'Bombasto',
      Time: '10:30 am',
      CommunityNameFrom: 'Family Banglore',
      CommunityId: ''
    },
    {
      Name: 'Magneta',
      Time: '10:30 am',
      CommunityNameFrom: 'Mechatronics',
      CommunityId: ''
    },
    {
      Name: 'Tornado',
      Time: '10:30 am',
      CommunityNameFrom: 'Ceebros',
      CommunityId: ''
    }
  ];
  PostAvailable = [
    { CommunityName: 'MCT2014', CommunityId: '' },
    { CommunityName: 'Family Banglore', CommunityId: '' },
    { CommunityName: 'Mechatronics', CommunityId: '' },
    { CommunityName: 'Ceebros', CommunityId: '' }
  ];

  ListOfFeedback = [
    { FeedbackType: 'Seen', FeedbackTypeCount: 24 },
    { FeedbackType: 'Like', FeedbackTypeCount: 86 },
    { FeedbackType: 'Comment', FeedbackTypeCount: 21 },
    { FeedbackType: 'Downrate', FeedbackTypeCount: 4 }
  ];
  constructor(private _QPData: SingleQuestionPaperDataService) {}

  ngOnInit() {
   // this.PostDetails = this._QPData.getQuestionPaper();
  }
}
