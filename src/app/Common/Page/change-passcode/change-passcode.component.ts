import { Component, OnInit } from '@angular/core';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';

@Component({
  selector: 'app-change-passcode',
  templateUrl: './change-passcode.component.html',
  styleUrls: ['./change-passcode.component.css']
})
export class ChangePasscodeComponent implements OnInit {

  constructor(private modalService: ModalAService) { }

  ngOnInit() {
    this.closeModal('login-modal')
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
