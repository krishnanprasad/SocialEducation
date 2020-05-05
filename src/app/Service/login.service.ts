import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public UserId;
  constructor() { }
  setUserId(userId) {
    this.UserId = userId;
  }
  getUserId() {
    if (this.UserId != null || this.UserId !== undefined) {
      return this.UserId;
    } else {
      return undefined;
    }
  }
}
