import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-wall-post',
  templateUrl: './wall-post.component.html',
  styleUrls: ['./wall-post.component.css']
})
export class WallPostComponent implements OnInit {
  public PostDetails = [];
  @Input('walldata') dataWallData;
  constructor() { }

  ngOnInit() {
    this.PostDetails = this.dataWallData;
  }

}
