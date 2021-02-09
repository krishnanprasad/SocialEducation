import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostListService } from '../post-list.service';
import { LoaderAService } from '../Modal/loader-a/loader-a.service';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  PostDetails = [];
  constructor(
    private route: ActivatedRoute,
    private _PostListService: PostListService,
    private loaderService:LoaderAService,
    private commonService:CommonService,
  ) { }

  ngOnInit() {
    debugger
    this.loaderService.open();
    //this.PostDetails = this._PostListService.getpostwalllist();

    this.commonService.get_webinarlist().subscribe(data => {
      if (data["status"] == 100) {
        debugger
        this.PostDetails = data["result"];        
      }
      else if (data["status"] == 300) {
        debugger
      }
      else if (data["status"] == 400) {
        debugger
      }
    }, (err) => {

    });
    this.loaderService.close();
  }

}
