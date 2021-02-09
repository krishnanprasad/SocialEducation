import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-b',
  templateUrl: './feedback-b.component.html',
  styleUrls: ['./feedback-b.component.css']
})
export class FeedbackBComponent implements OnInit {
  rating = [{
    web_name: 'Science and Maths basics',
    web_rating: 3,
    user_name: 'Ramkumar'
  },
  {
    web_name: 'How to Earn Income through Affiliate Marketing',
    web_rating: 3,
    user_name: 'Suresh'
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
