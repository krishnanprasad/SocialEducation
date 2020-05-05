import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {
  public Username;
  public CommunityFrom;
  public UserImage;
  public Comment;
  @Input('Name') dataName
  @Input('CommunityFrom') dataCommunityFrom
  @Input('Image') dataUserImage
  @Input('Comment') dataUserComment
  constructor() { }

  ngOnInit() {
    this.Username = this.dataName;
    this.CommunityFrom = this.dataCommunityFrom;
    this.UserImage = this.dataUserImage;
    this.Comment = this.dataUserComment;
  }

}
