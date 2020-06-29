import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest-ins-b',
  templateUrl: './suggest-ins-b.component.html',
  styleUrls: ['./suggest-ins-b.component.css']
})
export class SuggestInsBComponent implements OnInit {
  SuggestedInstitution=[{insname:'Sara Ins Checking the name with the doc'},{insname:'Sara Ins'},{insname:'Sara Ins'},{insname:'Sara Ins'}]
  constructor() { }

  ngOnInit() {
  }

}
