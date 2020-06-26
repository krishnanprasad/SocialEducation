import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
    
  
  }

  ngOnInit() {
    this.Editable = true;
  }

}
