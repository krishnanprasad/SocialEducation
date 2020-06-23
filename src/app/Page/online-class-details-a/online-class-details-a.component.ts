import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-class-details-a',
  templateUrl: './online-class-details-a.component.html',
  styleUrls: ['./online-class-details-a.component.css']
})
export class OnlineClassDetailsAComponent implements OnInit {

  constructor() { }
  public onlineclassdata = {
    webinarid: 'POS0005',
    UserImage: 'assets/Image/unknown1.jpg',
    UserName: 'Sriram',
    CommunityFrom: 'MCT 2014',
    fee: 0,
    ImageSrc: '',
    platform: 'Zoom',
    status: 1,
  };
  ngOnInit() {
  }

}
