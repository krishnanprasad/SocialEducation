import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-institution-card-b',
  templateUrl: './institution-card-b.component.html',
  styleUrls: ['./institution-card-b.component.css']
})
export class InstitutionCardBComponent implements OnInit {

  public Institution;
  @Input('dataInstitution') dataInstitution;
  public SearchFollowers;
  constructor() {}

  ngOnInit() {
    this.Institution = this.dataInstitution;

  }
}
