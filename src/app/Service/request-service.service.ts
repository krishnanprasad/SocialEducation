import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {
  public RequestList = [
    {
      Type: 'Friends',
      Username: 'Saravanan Kumar',
      UserImage: 'assets/Image/employee1.jpg',
      UserAbout: 'Now in 12th Standard Learning. Interested in Physics and Chemistry',
      MutualFriendCount: 33
    },
    {
      Type: 'Friends',
      Username: 'Singaravel',
      UserImage: 'assets/Image/employee1.jpg',
      UserAbout: 'Tech Enthusiast, Intersted in IT, Augumented Reality, Learner , Beginner',
      MutualFriendCount: 2
    },
    {
      Type: 'Friends',
      Username: 'Sowmiya',
      UserImage: 'assets/Image/employee1.jpg',
      UserAbout: 'Wishing to learn Machine Learning',
      MutualFriendCount: 11
    },
    {
      Type: 'Institution',
      InstitutionName: 'Vidhya Vikas 12th Maths',
      InstitutionImage: 'assets/Image/employee1.jpg',
      InstitutionAbout: 'Wishing to learn Machine Learning',
      InstitutionMutualFriendCount: 8
    },
    {
      Type: 'Institution',
      InstitutionName: 'Master JEE NEET',
      InstitutionImage: 'assets/Image/employee2.jpg',
      InstitutionAbout: 'Wishing to learn Machine Learning',
      InstitutionMutualFriendCount: 9
    },
    {
      Type: 'Institution',
      InstitutionName: 'ISharp NEET',
      InstitutionImage: 'assets/Image/employee2.jpg',
      InstitutionAbout: 'Wishing to learn Machine Learning',
      InstitutionMutualFriendCount: 17
    }
  ];

  getRequestList() {
    return this.RequestList;
  }
  constructor() { }
}
