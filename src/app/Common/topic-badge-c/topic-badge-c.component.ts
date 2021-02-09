import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-badge-c',
  templateUrl: './topic-badge-c.component.html',
  styleUrls: ['./topic-badge-c.component.css']
})
export class TopicBadgeCComponent implements OnInit {
  topiclist = ['#Maths', '#Science', '#Social'];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  Search(val) {
    this.router.navigate(['/Search'], { queryParams: { q: val } });
  }
}
