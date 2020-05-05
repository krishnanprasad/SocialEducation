import { Component, OnInit, Input, Injectable } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-edit-status-modal',
  templateUrl: './edit-status-modal.component.html',
  styleUrls: ['./edit-status-modal.component.css']
})
export class EditStatusModalComponent implements OnInit {

  @Input() name;


  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
