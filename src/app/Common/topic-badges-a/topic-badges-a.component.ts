import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-badges-a',
  templateUrl: './topic-badges-a.component.html',
  styleUrls: ['./topic-badges-a.component.css']
})
export class TopicBadgesAComponent implements OnInit {
  topiclist = ['#Maths', '#Science', '#Social','#covid19','#Diabetics']
  constructor() { }

  ngOnInit() {
  }

}
