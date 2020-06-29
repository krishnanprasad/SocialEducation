import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-badges-b',
  templateUrl: './topic-badges-b.component.html',
  styleUrls: ['./topic-badges-b.component.css']
})
export class TopicBadgesBComponent implements OnInit {
  topiclist = ['#Maths', '#Science', '#Social','#tamilnadu'];
  constructor() { }

  ngOnInit() {
  }

}
