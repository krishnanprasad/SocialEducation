import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participant-request-a',
  templateUrl: './participant-request-a.component.html',
  styleUrls: ['./participant-request-a.component.css']
})
export class ParticipantRequestAComponent implements OnInit {
  @Input('participantlist') participantlist: any;
  studentinvitationlist = [
    { name: 'Sudhakar Sai',status:0 ,type:'student'},
    { name: 'Kumaravel Ganeshan' ,status:0,type:'working'},
    { name: 'Krishnan Kumar' ,status:1,type:'student'},
    { name: 'Partheepan' ,status:1,type:'working'}
  ]
  constructor() { }
  ngOnChanges(){
    this.studentinvitationlist = this.participantlist;
  }
  ngOnInit() { 

  }

}
