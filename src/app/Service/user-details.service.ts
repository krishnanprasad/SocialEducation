import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  public UserDetails =
    {
      username: 'Krishnan RA',
      userimgsrc: 'assets/Image/employee0.jpg',
      userstatus: 'Where there is a will there is a way',
      usergrade : 'Grade 10',
      usercount: {
        totalpost: 10,
        totalfollowers: 15,
        totalfollowing: 7,
        totalqa : 65
      }
    };

  getUserWallData() {
    return this.UserDetails;
  }
  constructor() {}
}
