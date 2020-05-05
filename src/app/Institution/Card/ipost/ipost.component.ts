import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ipost',
  templateUrl: './ipost.component.html',
  styleUrls: ['./ipost.component.css']
})
export class IPostComponent implements OnInit {
  public CardList;
  @Input() data;
  constructor() { }

  ngOnInit() {
    this.CardList = this.data;
  }
  onClick() {
    alert('Hi');
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
