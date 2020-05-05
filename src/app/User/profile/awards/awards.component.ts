import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  @Input() Edit;
  public Editable;
  public AchievementList = [
    {
      Name: 'State First',
      // tslint:disable-next-line:max-line-length
      Description: 'Ranked No 1 in State Public examination with 92%',
      From: 'Tamilnadu State Education Board',
      TimeLine: '2010',
    },
    {
      Name: '2nd Place in SUPRA Racing',
      // tslint:disable-next-line:max-line-length
      Description: 'Secured 2nd Place in SUPRA Racing for Tyres and Breaking',
      From: 'SUPRA',
      TimeLine: '2013',
    }
  ];
  constructor() { }

  ngOnInit() {
    this.Editable = this.Edit;
  }

}
