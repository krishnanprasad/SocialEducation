import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-inst-post-list',
  templateUrl: './inst-post-list.component.html',
  styleUrls: ['./inst-post-list.component.css']
})
export class InstPostListComponent implements OnInit {
  public PostDetails = [];
  // tslint:disable-next-line:no-input-rename
  @Input('walldata') webinardata;
  @Output() passParticipantid = new EventEmitter();
  public FilterItems = [
    { id: 0, Item: 'Group 1', selected: true },
    { id: 0, Item: 'Group 2', selected: true },
    { id: 0, Item: 'Learning', selected: true },
    { id: 0, Item: 'Webinar', selected: true }
  ];


  constructor(private router: Router, private loginService: LoginService) { }


  gotoWebinar(webinarid) {
    debugger
    if (this.loginService.getUsertype() == 2) {
      this.router.navigate(['/Institution/WebinarDetails/' + webinarid]);
    }
  }

  valueChanged(val) {// You can give any function name    
    debugger
    this.passParticipantid.emit(val);
  }
  ngOnInit() {

  }

}
