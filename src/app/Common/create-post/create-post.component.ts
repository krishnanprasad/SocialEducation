import { Component, OnInit } from '@angular/core';
import { questionformat } from '../../class/questionformat';
import { questionpaper } from 'src/app/class/questionpaper';
import { addquestionpaperpostservice } from '../../Service/addquestionpaperpostservice.service';
import { DlDateTimePickerModel } from 'angular-bootstrap-datetimepicker';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  selectedDate: DlDateTimePickerModel;
  IsCalenderShowing: boolean = false;
  public chooseWebinarFee: string = 'free';
  public questionHeading;
  public ShowModal: any;
  public onQuestionCountChange: any;
  public totalQuestions: any;

  constructor(private _addquestionpaperpostservice: addquestionpaperpostservice) { }
  ngOnInit() {

  }
  ConfirmPost() {
    return null;
  }
  ngDoCheck() {
    if (this.selectedDate)
      this.IsCalenderShowing = !this.IsCalenderShowing;;
  }
  hidecalender() {
    this.IsCalenderShowing = !this.IsCalenderShowing;
    this.selectedDate = null;
  }
}
