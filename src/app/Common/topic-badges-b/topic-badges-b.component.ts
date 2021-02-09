import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-badges-b',
  templateUrl: './topic-badges-b.component.html',
  styleUrls: ['./topic-badges-b.component.css']
})
export class TopicBadgesBComponent implements OnInit {
  @Input('topiclist') topiclist;

  constructor(private router: Router) { }

  ngOnInit() {
    if (!this.topiclist) {
      this.topiclist = ['#Maths', '#Science', '#Social', '#tamilnadu'];
    }
  }
  Search(val) {
    this.router.navigate(['/Search'], { queryParams: { q: val } });
  }
}
