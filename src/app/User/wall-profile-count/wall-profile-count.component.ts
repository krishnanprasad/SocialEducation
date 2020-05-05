import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wall-profile-count',
  templateUrl: './wall-profile-count.component.html',
  styleUrls: ['./wall-profile-count.component.css']
})
export class WallProfileCountComponent implements OnInit {
  @Input('UserCount') dataUserWallUserCountData;
  public UserWallUserCountData;
  constructor() { }

  ngOnInit() {
    this.UserWallUserCountData = this.dataUserWallUserCountData;
  }

}
