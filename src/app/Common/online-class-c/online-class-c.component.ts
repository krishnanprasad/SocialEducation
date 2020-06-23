import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-class-c',
  templateUrl: './online-class-c.component.html',
  styleUrls: ['./online-class-c.component.css']
})
export class OnlineClassCComponent implements OnInit {
  @Input() onlineclassdata;
  webinardata: any;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.webinardata = this.onlineclassdata;
  }
  postdetails = [{ status: 1, platform: 'zoom' }, { status: 1, platform: 'zoom' }, { status: 2, platform: 'hangout' }, { status: 0, platform: 'teams' }]
  GoToWebinarDetail(id) {
    this.router.navigate(['/User/WebinarDetails', id]);
  }
}
