import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friend-request-card',
  templateUrl: './friend-request-card.component.html',
  styleUrls: ['./friend-request-card.component.css']
})
export class FriendRequestCardComponent implements OnInit {
  @Input() FriendRequestData;
  constructor() { }

  ngOnInit() {
  }

}
