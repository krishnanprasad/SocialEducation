import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-class-b',
  templateUrl: './online-class-b.component.html',
  styleUrls: ['./online-class-b.component.css']
})
export class OnlineClassBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  GoToWebinarDetail(id) {
    this.router.navigate(['/User/WebinarDetails', id]);
  }
}
