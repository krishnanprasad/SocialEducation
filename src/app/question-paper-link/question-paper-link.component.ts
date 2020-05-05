import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-paper-link',
  templateUrl: './question-paper-link.component.html',
  styleUrls: ['./question-paper-link.component.css']
})
export class QuestionPaperLinkComponent implements OnInit {
  @Input()
  QuestionPaperLink;
  public QuesPapLink;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.QuestionPaperLink);
    this.QuesPapLink = this.QuestionPaperLink;
  }
  GoToTestPaper(QuestionPaperId) {
   
    this.router.navigate(['/User/QuestionPaper', QuestionPaperId]);
    
  }

}
