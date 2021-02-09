import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  constructor(private http: HttpClient) { }
  public UserDetails =
    {
      username: 'Krishnan RA',
      userimgsrc: 'assets/Image/employee0.jpg',
      userstatus: 'Where there is a will there is a way',
      usergrade: 'Grade 10',
      usercount: {
        totalpost: 10,
        totalfollowers: 15,
        totalfollowing: 7,
        totalqa: 65
      }
    };

  getUserWallData() {
    return this.UserDetails;
  }

  edit_user_basic(userbasic): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post("http://localhost:51181/api/user/edit",
      userbasic,
      httpOptions
    );
  }
  get_user_basic(usertype, userid) {
    //debugger
    return this.http.get("http://localhost:51181/api/user/get", { params: { "usertype": usertype, "userid": userid } });
  }
  get_isuseradmin(pageid, userid) {
    return this.http.get("http://localhost:51181/api/user/isuseradmin", { params: { "pageid": pageid, "userid": userid } });
  }
  get_user_pagelist(userid) {
    //debugger
    return this.http.get("http://localhost:51181/api/organiser/getpageist", { params: { "userid": userid } });
  }
  edit_user_topics(usertopics): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post("http://localhost:51181/api/user/edittopics",
      usertopics,
      httpOptions
    );
  }
  get_user_topics(usertype, userid) {
    return this.http.get("http://localhost:51181/api/user/gettopics", { params: { "usertype": usertype, "userid": userid } });
  }
  get_user_activity_data(userid) {
    return this.http.get("http://localhost:51181/api/user/getactivitydata", { params: { "userid": userid } });
  }
  get_webinarlist(userid) {
    return this.http.get("http://localhost:51181/api/user/getwebinarlist", { params: { "userid": userid } });
  }
  get_webinar_recommender(userid) {
    return this.http.get("http://localhost:51181/api/webinar/getweinaruserrecommended", { params: { "userid": userid } });
  }
  follow_organiser(userid, organiserid, followtype): Observable<any> {
    var follow_api = JSON.stringify({ "userid": userid, "organiserid": organiserid, "followtype": followtype });
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }
    return this.http.post("http://localhost:51181/api/user/updatefollow",
      follow_api,
      httpOptions
    );
  }
  get_followinglist(userid) {
    return this.http.get("http://localhost:51181/api/user/getuserfollowing", { params: { "userid": userid } });
  }
  get_search_webinar(value) {
    return this.http.get("http://localhost:51181/api/user/getsearchwebinar", { params: { "value": value } });
  }
  get_search_organiser(value) {
    return this.http.get("http://localhost:51181/api/user/getsearchorganiser", { params: { "value": value } });
  }
}
