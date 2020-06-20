import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inst-post-list',
  templateUrl: './inst-post-list.component.html',
  styleUrls: ['./inst-post-list.component.css']
})
export class InstPostListComponent implements OnInit {
  public PostDetails = [];
  // tslint:disable-next-line:no-input-rename
  @Input('walldata') dataWallData;
  @Output() passParticipantid = new EventEmitter();
  public FilterItems = [
    {id: 0, Item: 'Group 1', selected: true  },
    {id: 0, Item: 'Group 2', selected: true  },
    {id: 0, Item: 'Learning', selected: true  },
    {id: 0, Item: 'Webinar', selected: true  }
  ];
 
  constructor() { }
  
  
 

  valueChanged() {// You can give any function name    
      this.passParticipantid.emit('1');
  }
  ngOnInit() {
    this.PostDetails = this.dataWallData;
  }
 
}
