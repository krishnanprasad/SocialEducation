import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-class-c',
  templateUrl: './online-class-c.component.html',
  styleUrls: ['./online-class-c.component.css']
})
export class OnlineClassCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  postdetails=[{status:1,platform:'zoom'},{status:1,platform:'zoom'},{status:2,platform:'hangout'},{status:0,platform:'teams'}]

}
