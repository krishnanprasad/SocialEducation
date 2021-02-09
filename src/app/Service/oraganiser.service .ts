import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class oraganiserService {
  constructor(private http: HttpClient) { }
  get_organiser_user_Profile(usertype, organiserid, userid) {
    //debugger
    return this.http.get("http://localhost:51181/api/organiser/getprofileuser", { params: { "usertype": usertype, "organiserid": organiserid, "userid": userid } });
  }
  get_page_profile(pageid,userid) {
    //debugger
    return this.http.get("http://localhost:51181/api/organiser/getpageprofile", { params: { "pageid": pageid, "userid": userid} });
  }
  
  get_organiser_admin_Profile(usertype, userid) {
    // debugger
    return this.http.get("http://localhost:51181/api/organiser/getprofileadmin", { params: { "usertype": usertype, "userid": userid } });
  }
  edit_organiser_profile(userbasic): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post("http://localhost:51181/api/organiser/editprofile",
      userbasic,
      httpOptions
    );
  }
  get_dashboard_data(userid) {
    debugger
    return this.http.get("http://localhost:51181/api/organiser/getdashboarddata", { params: { "userid": userid } });
  }
}
