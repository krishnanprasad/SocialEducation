import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';

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
  constructor(private router: Router, private modalService: ModalAService) { }

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
  GoToTrasaction() {
    this.router.navigate(['/User/Activity']);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
