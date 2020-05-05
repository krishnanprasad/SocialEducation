import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-recommendation-card',
  templateUrl: './user-recommendation-card.component.html',
  styleUrls: ['./user-recommendation-card.component.css']
})
export class UserRecommendationCardComponent implements OnInit {
  @Input() MutualFriendData;
  constructor() { }

  ngOnInit() {
    console.log('The Data to Mutual Friend Page is ' + this.MutualFriendData);
    }

}
