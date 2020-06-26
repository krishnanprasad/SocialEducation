import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inst-post-list-b',
  templateUrl: './inst-post-list-b.component.html',
  styleUrls: ['./inst-post-list-b.component.css']
})
export class InstPostListBComponent implements OnInit {
  @Input('walldata') dataWallData;

  public FilterItems = [
    { id: 0, Item: 'Group 1', selected: true },
    { id: 0, Item: 'Group 2', selected: true },
    { id: 0, Item: 'Learning', selected: true },
    { id: 0, Item: 'Webinar', selected: true }
  ];
  PostDetails: any;
  constructor(private router: Router,) { }


  GoToWebuinar(id) {// You can give any function name    
    this.router.navigate(['/Institution/WebinarDetails', id]);
  }
  ngOnInit() {
    this.PostDetails = this.dataWallData;
  }
}
