import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-class-a',
  templateUrl: './online-class-a.component.html',
  styleUrls: ['./online-class-a.component.css']
})
export class OnlineClassAComponent implements OnInit {
  modal: string = "modal modal-close";
  isOpen: boolean = false;
  @Input()
  onlineclassdata;
  public QuesPapLink;
  constructor(private router: Router) { }

  ngOnInit() {
    this.modal = "modal modal-close";
    this.QuesPapLink = this.onlineclassdata;
  }
  GoToTestPaper(QuestionPaperId) {

   // this.router.navigate(['/User/QuestionPaper', QuestionPaperId]);

  }

  closemodal() {
    this.modal = "modal modal-close";
    this.isOpen = false;
  }
  openmodal() {
    this.isOpen = true;
    this.modal = "modal modal-open";
  }
}
