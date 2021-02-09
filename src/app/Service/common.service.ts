import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  get_webinarlist() {
    return this.http.get("http://localhost:51181/api/common/getwebinarlist");
  }
}
