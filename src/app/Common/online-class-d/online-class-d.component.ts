import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-class-d',
  templateUrl: './online-class-d.component.html',
  styleUrls: ['./online-class-d.component.css']
})
export class OnlineClassDComponent implements OnInit {
  postdetails = [{ status: 1, platform: 'zoom' }, { status: 1, platform: 'zoom', fee: 0 }, { status: 2, platform: 'hangout', fee: 0 }, { status: 0, platform: 'teams', fee: 100 }]
  modal: string = "modal modal-close";
  isOpen: boolean = false;
  @Input() onlineclassdata;
  public QuesPapLink;
  constructor(private router: Router) { }

  ngOnInit() {
    this.modal = "modal modal-close";
    this.QuesPapLink = this.onlineclassdata;
  }
  GoToWebinarDetail(id) {
    this.router.navigate(['/User/WebinarDetails', id]);
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
