import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participant-request-b',
  templateUrl: './participant-request-b.component.html',
  styleUrls: ['./participant-request-b.component.css']
})
export class ParticipantRequestBComponent implements OnInit {

  @Input('participantlist') participantlist: any;
  studentinvitationlist = [
    { name: 'Sudhakar Sai',status:1 ,type:'student'},
    { name: 'Kumaravel Ganeshan' ,status:1,type:'working'},
    { name: 'Krishnan Kumar' ,status:1,type:'student'},
    { name: 'Partheepan' ,status:1,type:'working'}
  ]
  constructor() { }
  ngOnChanges(){
    //debugger
    this.studentinvitationlist = this.participantlist;
  }
  ngOnInit() { 

  }

}
