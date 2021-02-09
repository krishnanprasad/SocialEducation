import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public UserId: string = null;
  public IsLoggedIn: boolean = false;
  public Usertype: number = null;
  public URL: string = "http://localhost:51181/api/"
  //public URL: string = "http://beta.core/api/"
  constructor(private http: HttpClient) { }

  getOTP(usertype, email) {
    return this.http.get(this.URL + "authentication/Getotp", { params: { "usertype": usertype, "value": email } });
  }
  verifyOTP(usertype, email, otp, passcode) {
    usertype = Number(usertype);
    return this.http.get(this.URL + "/authentication/Verifyotp", { params: { "usertype": usertype, "value": email, "otp": otp, "passcode": passcode } });
  }
  verifypasscode(usertype, email, passcode) {
    return this.http.get(this.URL + "authentication/Verifypasscode", { params: { "usertype": usertype, "value": email, "passcode": passcode } });
  }
  getloginstatus() {
    //  debugger
    var IsLoggedIn = sessionStorage.getItem('usertype');
    if (IsLoggedIn != undefined) {
      this.IsLoggedIn = true;
    }
    return this.IsLoggedIn;
  }
  signout() {
    this.IsLoggedIn = false;
  }
  loginsuccess() {
    var IsLoggedIn = sessionStorage.getItem('usertype');
    if (IsLoggedIn != undefined) {
      this.IsLoggedIn = true;
    }
  }
  getUserId() {
    
    this.getloginstatus()
    if (this.IsLoggedIn != false) {
      if (this.UserId == null || this.UserId == undefined) {
        this.UserId = JSON.parse(sessionStorage.getItem('usertype')).userid;
        this.Usertype = JSON.parse(sessionStorage.getItem('usertype')).usertype;
        return this.UserId;
      } else {
        return this.UserId;
      }
    }
  }
  setUserDetails(obj) {
    this.UserId = obj.userid;
    this.Usertype = obj.usertype;
  }
  getUsertype() {
    
    this.getloginstatus()
    if (this.IsLoggedIn != false) {

      return JSON.parse(sessionStorage.getItem('usertype'))["usertype"];
    } else {

      return undefined;
    }
  }
  isUserParticipant() {
    
    this.getloginstatus()
    if (this.IsLoggedIn != false) {
      var a = JSON.parse(sessionStorage.getItem('usertype'));
      //debugger
      if (JSON.parse(sessionStorage.getItem('usertype'))["usertype"] == 1) {
        return true;
      }
      else {
        return false;
      }
    } else {
      return undefined;
    }
  }

  private subject = new Subject<any>();

  sendMessage(IsParticipant: Boolean) {
    this.subject.next({ text: IsParticipant });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
