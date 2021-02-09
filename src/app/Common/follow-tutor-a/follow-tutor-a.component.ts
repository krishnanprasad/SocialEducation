import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-tutor-a',
  templateUrl: './follow-tutor-a.component.html',
  styleUrls: ['./follow-tutor-a.component.css']
})
export class FollowTutorAComponent implements OnInit {
  details=[{tutorname:'Dr. Ramesh Kumaravel',followers:7250},{tutorname:'Ramesh',followers:7250},{tutorname:'Ramesh',followers:7250}]
  constructor() { }

  ngOnInit() {
  }

}
