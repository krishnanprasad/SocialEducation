import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iwallprofilecount',
  templateUrl: './iwallprofilecount.component.html',
  styleUrls: ['./iwallprofilecount.component.css']
})
export class IwallprofilecountComponent implements OnInit {

  @Input('UserCount') dataUserWallUserCountData;
  public UserWallUserCountData;
  constructor() { }

  ngOnInit() {
    this.UserWallUserCountData = this.dataUserWallUserCountData;
  }


}
