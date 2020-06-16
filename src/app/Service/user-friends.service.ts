import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFriendsService {
  public UserFriendsList = [
    {
      Username: 'Ramesh Kumar',
      UserImage: 'assets/Image/employee1.jpg',
      userid: '@rameshkumar',
      type:"Paid",
      lastused: "14210"
    },
    {
      Username: 'Singaravel',
      UserImage: 'assets/Image/employee1.jpg',
      userid: '@singaravel',
      type:"Free",
      lastused: "19200"
    },
    {
      Username: 'Sowmiya',
      UserImage: 'assets/Image/employee1.jpg',
      userid: '@sowmiya',
      type:"Free",
      lastused: "16803"
    }
  ];

  getuserfriendsList() {
    return this.UserFriendsList;
  }
  constructor() { }
}
