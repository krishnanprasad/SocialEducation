import { Component, OnInit } from '@angular/core';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';

@Component({
  selector: 'app-ins-about',
  templateUrl: './ins-about.component.html',
  styleUrls: ['./ins-about.component.css']
})
export class InsAboutComponent implements OnInit {

  constructor(private loader:LoaderAService) { }

  ngOnInit() {
    this.loader.close();
  }

}
