import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../Service/login.service';
import { ModalAService } from '../Modal/Modal-a/modal-a.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar-a',
  templateUrl: './navbar-a.component.html',
  styleUrls: ['./navbar-a.component.css']
})
export class NavbarAComponent implements OnInit {
  subscription: Subscription;
  IsParticipant: boolean = true;
  ActiveNav: string;
  ActiveLink = { Wall: false, Notification: false, Follow: false, Activity: false };
  IsUserLoggedIn: boolean;
  usertype: any = 'student';
  constructor(
    private modalService: ModalAService,
    private router: Router, public loginservice: LoginService,
    private route: ActivatedRoute,
  ) { }
  private UserId;

  // private ActiveRouter: string;
  ngOnInit() {
    //  debugger
    this.loginservice.getMessage().subscribe(message => {      
      this.IsParticipant =   message.text;     
    });
    
    var currentUser = JSON.parse(sessionStorage.getItem('usertype'));
    // debugger
    //console.log('--ISSTUDENT--' + this.IsParticipant);
    // if (currentUser == null) {
    //   this.loginservice.signout();
    //   this.router.navigate(['']);
    // }
    // else {
    //   debugger
    //   this.loginservice.loginsuccess();
    //   if (this.loginservice.getUsertype() == 1) {
    //     this.IsParticipant = true; // your token
    //   }
    //   else {
    //     this.IsParticipant = false;
    //   }
    // }
    
    this.IsParticipant = this.loginservice.isUserParticipant();
  }
  LogOff() {
    sessionStorage.removeItem('usertype');
    this.loginservice.signout();
    this.router.navigate(['']);
  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  makeallactivelinkfalse() {
    this.ActiveLink = { Wall: false, Notification: false, Follow: false, Activity: false };
  }
  routenav(page) {
    // debugger
    if (page == '') {
      this.router.navigate(['']);
    }
    else {
      this.makeallactivelinkfalse();
      this.ActiveLink[page] = true;
      // var usertype = JSON.parse(sessionStorage.getItem('usertype'));
      if (this.loginservice.Usertype == null) {
        this.loginservice.getUserId();
      }
      if (this.loginservice.Usertype == 1) {
        this.router.navigate(['/' + page],{relativeTo: this.route});
      }
      else {
        this.router.navigate(['/Institution/' + page]);
      }
    }
  }
  register() {
    this.router.navigate(['/SignUp']);
  }
  changeUserType(val) {
    let myObj
    if (val == 1) {
      myObj = { usertype: 'std', IsParticipant: true };
    }
    else {
      myObj = { usertype: 'ins', IsParticipant: false };
    }
    sessionStorage.setItem('usertype', JSON.stringify(myObj));
    this.ngOnInit();
  }
  RegisterUser() {
    this.closeModal('login-modal')
    this.openModal('register-modal');
  }
  GoToPage(Page) {
    // debugger
    //this.loginservice.setUserId('Institution');
    this.UserId = this.loginservice.getUserId();
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
    if (Page == 'Search') {
      this.router.navigate(['/Search']);
    }

  }

  openModal(id: string) {
    // debugger
    this.modalService.open(id);
  }

  closeModal(id: string) {
    // debugger
    this.modalService.close(id);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}