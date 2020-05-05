import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inst-post-list',
  templateUrl: './inst-post-list.component.html',
  styleUrls: ['./inst-post-list.component.css']
})
export class InstPostListComponent implements OnInit {
  public PostDetails = [];
  // tslint:disable-next-line:no-input-rename
  @Input('walldata') dataWallData;

  public FilterItems = [
    {id: 0, Item: 'Post', selected: true  },
    {id: 0, Item: 'Test', selected: true  },
    {id: 0, Item: 'Learning', selected: true  },
    {id: 0, Item: 'Webinar', selected: true  }
  ];
  constructor() { }

  ngOnInit() {
    this.PostDetails = this.dataWallData;
  }
  FilterItem(id) {
  }
}
