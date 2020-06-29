import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-a',
  templateUrl: './feedback-a.component.html',
  styleUrls: ['./feedback-a.component.css']
})
export class FeedbackAComponent implements OnInit {
  rating=[{
    web_name:'Science and Maths basics',
    web_rating:3
  },
  {
    web_name:'How to Earn Income through Affiliate Marketing',
    web_rating:3
  }
]
  constructor() { }

  ngOnInit() {
  }

}
