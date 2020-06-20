import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participant-request-a',
  templateUrl: './participant-request-a.component.html',
  styleUrls: ['./participant-request-a.component.css']
})
export class ParticipantRequestAComponent implements OnInit {
  @Input('participantlist') participantlist: any;
  studentinvitationlist = [
    { name: 'Sudhakar Sai' },
    { name: 'Kumaravel Ganeshan' },
    { name: 'Krishnan Kumar' },
    { name: 'Partheepan' }
  ]
  constructor() { }
  ngOnChanges(){
    this.studentinvitationlist = this.participantlist;
  }
  ngOnInit() { 

  }

}
