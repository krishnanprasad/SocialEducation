import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-brief',
  templateUrl: './post-brief.component.html',
  styleUrls: ['./post-brief.component.css']
})
export class PostBriefComponent implements OnInit {
  public CardList;
  @Input() data;
  constructor() { }

  ngOnInit() {
    this.CardList = this.data;
  }
  alertvalue(Value) {
    alert('option Selected' + Value);
  }
  getType(Type) {
    switch (Type) {
      case 'Offering':
        return '#00ad5d';
      case 'Request':
        return '#f5004f';
      case 'Activity':
        return '#b69001';
    }
  }
}
