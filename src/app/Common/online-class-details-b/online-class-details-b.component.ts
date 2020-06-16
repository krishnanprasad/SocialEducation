import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-class-details-b',
  templateUrl: './online-class-details-b.component.html',
  styleUrls: ['./online-class-details-b.component.css']
})
export class OnlineClassDetailsBComponent implements OnInit {
  studentinvitationlist = [
    { name: 'Sudhakar Sai' },
    { name: 'Kumaravel Ganeshan' },
    { name: 'Krishnan Kumar' },
    { name: 'Partheepan' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
