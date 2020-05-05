import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFriendsService {
  public UserFriendsList = [
    {
      Username: 'Saravanan Kumar',
      UserImage: 'assets/Image/employee1.jpg',
      UserAbout: 'Now in 12th Standard Learning. Interested in Physics and Chemistry'
    },
    {
      Username: 'Singaravel',
      UserImage: 'assets/Image/employee1.jpg',
      UserAbout: 'Tech Enthusiast, Intersted in IT, Augumented Reality, Learner , Beginner'
    },
    {
      Username: 'Sowmiya',
      UserImage: 'assets/Image/employee1.jpg',
      UserAbout: 'Wishing to learn Machine Learning'
    }
  ];

  getuserfriendsList() {
    return this.UserFriendsList;
  }
  constructor() { }
}
