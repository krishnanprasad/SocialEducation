import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-qapost',
  templateUrl: './qapost.component.html',
  styleUrls: ['./qapost.component.css']
})
export class QAPostComponent implements OnInit {
  @Input()  Question;
  @Input()  Answered;
  constructor() {}
  public Ques;
  public Ansred;
  public IsLoading;
  ngOnInit() {
    this.Ques = this.Question;
    this.Ansred = this.Answered;
    this.IsLoading=false;
  }
  ChosenOption(option, questionid) {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(newchange: SimpleChanges) {
    const Q = newchange['Question'];
    const A = newchange['Answer'];
    this.Ques = Q.currentValue;
  }
  ShowQuestion(){
    this.IsLoading=true;
  }
}
