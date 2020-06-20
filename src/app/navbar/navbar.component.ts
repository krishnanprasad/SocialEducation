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
  IsStudent: boolean = true;
  ActiveNav: string;
  ActiveLink = { Wall: false, Notification: false, Follow: false, Activity: false };
  constructor(
    private modalService: NgbModal,
    private router: Router, private LogSer: LoginService,

  ) { }
  private UserId;
  // private ActiveRouter: string;
  ngOnInit() {
    
    var currentUser = JSON.parse(localStorage.getItem('usertype'));

    //console.log('--ISSTUDENT--' + this.IsStudent);
    if (currentUser == null) {
      alert('Please Login !');
      this.router.navigate(['/Login']);
    }
    else {
      this.IsStudent = currentUser.isstudent; // your token
    }
  }
  LogOff() {
    localStorage.removeItem('usertype');
    this.router.navigate(['/Login']);
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
  makeallactivelinkfalse() {
    this.ActiveLink = { Wall: false, Notification: false, Follow: false, Activity: false };
  }
  routenav(page) {
    this.makeallactivelinkfalse();

    this.ActiveLink[page] = true;

    var usertype = JSON.parse(localStorage.getItem('usertype'));
    if (usertype.isstudent == true) {
      this.router.navigate(['/User/' + page]);
    }
    else {
      this.router.navigate(['/Institution/' + page]);
    }

  }
  changeUserType(val) {

    let myObj
    if (val == 1) {
      myObj = { usertype: 'std', isstudent: true };
    }
    else {
      myObj = { usertype: 'ins', isstudent: false };
    }
    localStorage.setItem('usertype', JSON.stringify(myObj));

    this.ngOnInit();

  }

  GoToPage(Page) {
    this.LogSer.setUserId('Institution');
    this.UserId = this.LogSer.getUserId();
    if (Page === 'Wall') {
      this.router.navigate(['/Wall']);
    }
    if (Page === 'AddPost') {
      // console.log('page' + Page + ' user Id' + this.UserId);
      if (this.UserId !== undefined) {
        this.router.navigate(['/Institution/CreatePost']);
      } else {
        this.router.navigate(['/User/', this.UserId]);
      }
    }
    if(Page=='Search')
    {
      this.router.navigate(['/Search']);
    }

  }
}
