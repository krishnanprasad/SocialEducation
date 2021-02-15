import { Component, OnInit } from '@angular/core';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  constructor(private loader: LoaderAService) { }

  ngOnInit() {
    this.loader.close()
  }

}
