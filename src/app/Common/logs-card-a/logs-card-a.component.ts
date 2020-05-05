import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logs-card-a',
  templateUrl: './logs-card-a.component.html',
  styleUrls: ['./logs-card-a.component.css']
})
export class LogsCardAComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('UserLogsList') dataLogsList;
  public LogsList;
  constructor() { }

  ngOnInit() {
    this.LogsList = this.dataLogsList;
  }

}
