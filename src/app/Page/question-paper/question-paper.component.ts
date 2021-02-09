import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleQuestionPaperDataService } from '../../Service/single-question-paper-data.service';
import { CountdownComponent } from 'ngx-countdown';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { flatten } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {
  public QAStarted = false;
  public QuesPap;
  public QuestionShowing = 0;
  public CompleteButton = false;
  public StartButton = true;
  public Question;
  @ViewChild('countdown') counter: CountdownComponent;
  public timer ;
  qpid: any;
  constructor(
    private route: ActivatedRoute,
     private _SingQP: SingleQuestionPaperDataService,
     private modalService: NgbModal,
     ) {
  }

 //
  notify: string;
  config: any = { leftTime: 10 * 60, demand: true, notify: [2, 5] };
  Begin(timer) {
    this.QAStarted = true;
    timer.begin();
    this.StartButton = false;
    this.CompleteButton = true;
  }
  End(timer) {
    if (confirm('Are you sure to Complete the Test')) {
      this.QAStarted = false;
      timer.stop();
    }
  }
  onStart() {
    this.notify = 'Started';
  }
  onFinished() {
    this.notify = 'End';
  }
  onNotify(time: number) {
    this.notify = `s${time}sa`;
  }
  // tslint:disable-next-line:member-ordering
  stopConfig: any = { stopTime: new Date().getTime() + 1000 * 30 };
  resetStop(timer) {

    this.stopConfig = { stopTime: new Date().getTime() + 1000 * 30 };
  }

  onEvent(value: any) {
    console.log('event', value);
  }

  // tslint:disable-next-line:member-ordering
  resetTimer() {
    this.counter.restart();
  }
 //

  ngOnInit() {
    this.qpid = this.route.snapshot.params['QuestionPaperId'];
    //this.QuesPap = this._SingQP.getQuestionPaper();
    // this.QuesPap=this.QuesPapFinal.filter(e=>e.QuestionPaperId===qpid);
    this.Question = this.QuesPap.QuestionPaper.Question[this.QuestionShowing];
  }
  GoToQuestion(QuestionNos) {
      this.Question = this.QuesPap.QuestionPaper.Question[QuestionNos];
  }
  NextQuestion() {
    console.log('Next Question:' + this.QuestionShowing);
    if (this.QuestionShowing < this.QuesPap.QuestionPaper.totalquestion) {
      this.QuestionShowing = this.QuestionShowing + 1;
      this.Question = this.QuesPap.QuestionPaper.Question[this.QuestionShowing];
    }
  }
  PreviousQuestion() {
    // console.log('Previous Question:' + this.QuestionShowing);
     if (this.QuestionShowing > 0) {
       this.QuestionShowing = this.QuestionShowing - 1;
       this.Question = this.QuesPap.QuestionPaper.Question[this.QuestionShowing];
     }
  }
}
