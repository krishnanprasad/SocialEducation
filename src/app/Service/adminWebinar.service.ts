import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class adminWebinarService {
  constructor(private http: HttpClient) { }
  get_WebinarDetails_admin(webinarid,adminid) {
    return this.http.get("http://localhost:51181/api/admin/webinar/getdetail", { params: { "webinarid": webinarid,"adminid":adminid } });
  }
  get_edit_WebinarDetails_admin(webinarid,adminid) {
    return this.http.get("http://localhost:51181/api/admin/webinar/getdetailedit", { params: { "webinarid": webinarid,"adminid":adminid } });
  }
  
  // create_Webinar(webinardetails): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   }

  //   return this.http.post("http://localhost:51181/api/webinar/create",
  //     webinardetails,
  //     httpOptions
  //   );
  // }
  get_WebinarList_Activity(pageid) {
    return this.http.get("http://localhost:51181/api/admin/webinar/getlist", { params: { "pageid": pageid} });
  }
  get_Webinar_UserList(webinarid) {
    return this.http.get("http://localhost:51181/api/admin/webinar/getuserlist", { params: { "webinarid": webinarid} });
  }

}
