import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-postheader',
  templateUrl: './postheader.component.html',
  styleUrls: ['./postheader.component.css']
})
export class PostheaderComponent implements OnInit {
//INPUTS:Name, CommunityFrom , Image

  public Username;
  public CommunityFrom;
  public UserImage;
  @Input('Name') dataName;
  @Input('CommunityFrom') dataCommunityFrom;
  @Input('Image') dataUserImage;
  @Input('time') datatime;
  public time;


  constructor() { }

  ngOnInit() {
    this.Username = this.dataName;
    this.CommunityFrom = this.dataCommunityFrom;
    this.UserImage = this.dataUserImage;
    this.time = this.datatime;

  }

}
