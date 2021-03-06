import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ActiveNav: string;
  constructor(
    private modalService: NgbModal,
    private router: Router,private LogSer: LoginService,
  
  ) {}
  private UserId;
  // private ActiveRouter: string;
  ngOnInit() {
    // this.ActiveRouter= "Wall";
    console.log("Current Page" + this.router.isActive.name);
  }
 
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  // GoToLink(page){
  //   this.ActiveRouter=page;
  // }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  GoToPage(Page) {
    this.LogSer.setUserId('Institution');
    this.UserId = this.LogSer.getUserId();
    if (Page === 'Wall') {
        this.router.navigate(['/Wall']);
    }
    if (Page === 'AddPost') {
      console.log('page' + Page + ' user Id' + this.UserId);
      if (this.UserId !== undefined) {
        this.router.navigate(['/Institution/CreatePost']);
      } else {
        this.router.navigate(['/User/', this.UserId]);
      }
    }
  }
}
