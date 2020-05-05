import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public CardList;
  @Input() data;
  check: any;
  constructor( private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.CardList = this.data;
  }
  
  alertvalue(Value) {
    alert('option Selected' + Value);
  }
  embedURL(oldURL)  {
    return this._sanitizer.bypassSecurityTrustResourceUrl(oldURL);
   }
  getType(Type) {
    switch (Type) {
      case 'Offering':
        return '#00ad5d';
      case 'Request':
        return '#f5004f';
      case 'Activity':
        return '#b69001';
    }
  }
}
