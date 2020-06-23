import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditStatusModalComponent } from 'src/app/Modal/edit-status-modal/edit-status-modal.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
  public Editable;
  constructor(
    private modalService: NgbModal,
  ) { }

  openVerticallyCentered() {
    console.log('Model Coming In');
    const modalRef = this.modalService.open(EditStatusModalComponent, { centered: true });
    modalRef.componentInstance.name = 'Saravanan';
  }

  ngOnInit() {
    this.Editable = true;
  }

}
