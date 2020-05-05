import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iwallprofile',
  templateUrl: './iwallprofile.component.html',
  styleUrls: ['./iwallprofile.component.css']
})
export class IwallprofileComponent implements OnInit {
  @Input('UserDetailData') dataUserWallData;
  public UserWallData;
  constructor() { }

  ngOnInit() {
    this.UserWallData = this.dataUserWallData;
   
  }
}
