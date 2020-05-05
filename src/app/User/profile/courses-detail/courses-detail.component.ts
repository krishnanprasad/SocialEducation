import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {
  @Input() Edit;
  public Editable;
  constructor() { }

  ngOnInit() {
    this.Editable = this.Edit;
  }

}
