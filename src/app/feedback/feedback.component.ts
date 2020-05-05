import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public PostId;
  public PostLike;
  public PostComment;
  public PostIntrest;
  public PostDownrate;
  @Input('PostID')
  dataPostId;
  @Input('PostLike')
  dataPostLike;
  @Input('PostComment')
  dataPostComment;
  @Input('PostIntrest')
  dataPostIntrest;
  @Input('PostDownrate')
  dataPostDownrate;
  @Input('rating')
  rating;

  public ImgLikeSrc;
  public ImgCommentSrc;
  public ImgJoiningSrc;
  public ImgDownrateSrc;
  public UserPostLike;
  public UserPostDownrate;
  public UserPostJoining;
 
  constructor() {}

  ngOnInit() {
    this.PostId = this.dataPostId;
    this.PostLike = this.dataPostLike;
    this.PostComment = this.dataPostComment;
    this.PostIntrest = this.dataPostIntrest;
    this.PostDownrate = this.dataPostDownrate;
    this.UserPostLike = true;
    this.UserPostDownrate = true;
    this.UserPostJoining = true;
    this.UserPostLike = false;
    this.ImgLikeSrc = 'assets/Image/Icons/like0.png';
    this.ImgCommentSrc = 'assets/Image/Icons/comment0.png';
    this.ImgJoiningSrc = 'assets/Image/Icons/joining0.png';
    this.ImgDownrateSrc = 'assets/Image/Icons/downrate0.png';
  }
  AddFeedback(Type, PostId) {
    if (Type === 'Like') {
      if (this.UserPostLike === false) {
        this.ImgLikeSrc = 'assets/Image/Icons/like1.png';
        this.UserPostLike = true;
      } else {
        this.ImgLikeSrc = 'assets/Image/Icons/like0.png';
        this.UserPostLike = false;
      }
    }
    if (Type === 'Joining') {
      if (this.UserPostJoining === false) {
        this.ImgJoiningSrc = 'assets/Image/Icons/joining0.png';
        this.UserPostJoining = true;
      } else {
        this.ImgJoiningSrc = 'assets/Image/Icons/joining1.png';
        this.UserPostJoining = false;
      }
    }
    if (Type === 'Downrate') {
      if (this.UserPostDownrate === false) {
        this.ImgDownrateSrc = 'assets/Image/Icons/downrate0.png';
        this.UserPostDownrate = true;
      } else {
        this.ImgDownrateSrc = 'assets/Image/Icons/downrate1.png';
        this.UserPostDownrate = false;
      }
      this.ImgDownrateSrc = 'assets/Image/Icons/downrate1.png';
    }
  }
}
