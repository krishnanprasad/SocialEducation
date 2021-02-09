import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WebinarService {
  constructor(private http: HttpClient) { }

  create_Webinar(webinardetails): Observable<any> {
    debugger
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    console.log(webinardetails)
    //console.log(webinardetails)
    return this.http.post("http://localhost:51181/api/webinar/create",
      webinardetails,
      httpOptions
    ).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    debugger
    return throwError(error);
}
  get_WebinarDetails(webinarid, userid, isLoggedIn) {
    return this.http.get("http://localhost:51181/api/webinar/getDetail", { params: { "webinarid": webinarid, "userid": userid, "isLoggedIn": isLoggedIn } });
  }
  get_WebinarComments(webinarid, userid) {
    return this.http.get("http://localhost:51181/api/webinar/getComment", { params: { "webinarid": webinarid, "userid": userid, } });
  }
  register_webinar(webinardetails): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post("http://localhost:51181/api/registration/create",
      webinardetails,
      httpOptions
    );
  }

  add_comment(userid, webinarid, comment): Observable<any> {
    //debugger
    var addcomment = JSON.stringify({ "webinarid": webinarid, "userid": userid, "comment": comment });
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }
    return this.http.post("http://localhost:51181/api/webinar/addComment",
      addcomment,
      httpOptions
    );
  }
  update_comment(commentid, userid, comment, status): Observable<any> {
    var updatecomment = JSON.stringify({ "commentid": commentid, "userid": userid, "comment": comment, "status": status });
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }
    return this.http.post("http://localhost:51181/api/webinar/updateComment",
      updatecomment,
      httpOptions
    );
  }
  update_webinar(webinardetails): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post("http://localhost:51181/api/webinar/edit",
      webinardetails,
      httpOptions
    );
  }

  confirm_Transaction(confirmtransaction): Observable<any> {
    debugger
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post("http://localhost:51181/api/webinar/confirmTransaction",
    confirmtransaction,
      httpOptions
    );
  }
  get_payment_list(userid) {
    return this.http.get("http://localhost:51181/api/webinar/getpaymenthistory", { params: { "userid": userid, } });
  }
}
