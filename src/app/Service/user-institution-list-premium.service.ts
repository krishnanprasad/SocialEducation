import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInstitutionListPremiumService {
  public UInstitutionPremium = [
    {
      InstitutionName: 'SKCET 2014 MCT',
      InstitutionImage: 'assets/Image/employee1.jpg',
      UsersCount: '11',
      InstitutionType: 'Premium',
    },
    {
      InstitutionName: 'TIME CBE Group 4',
      InstitutionImage: 'assets/Image/employee1.jpg',
      UsersCount: '24',
      InstitutionType: 'Premium',
    },
    {
      InstitutionName: 'MasterJee Chennai Group 4',
      InstitutionImage: 'assets/Image/employee1.jpg',
      UsersCount: '91',
      InstitutionType: 'Premium',
    }
  ];

  public UInstitutionNonPremium = [
    {
      InstitutionName: 'Aashram Institution Group 4',
      InstitutionImage: 'assets/Image/employee1.jpg',
      UsersCount: '323',
      InstitutionType: 'NoN-Premium',
    },
    {
      InstitutionName: 'SNS CBE Group 4',
      InstitutionImage: 'assets/Image/employee1.jpg',
      UsersCount: '123',
      InstitutionType: 'NoN-Premium',
    },
    {
      InstitutionName: 'Bright Chennai Group 4',
      InstitutionImage: 'assets/Image/employee1.jpg',
      UsersCount: '1k',
      InstitutionType: 'NoN-Premium',
    },
    {
      InstitutionName: 'Star CBE Group 4',
      InstitutionImage: 'assets/Image/employee1.jpg',
      UsersCount: '414',
      InstitutionType: 'NoN-Premium',
    },
    {
      InstitutionName: 'Wise Madurai Group 4',
      InstitutionImage: 'assets/Image/employee1.jpg',
      UsersCount: '221',
      InstitutionType: 'NoN-Premium',
    }
  ];
  getUInstitutionPremium() {
    return this.UInstitutionPremium;
  }
  getUInstitutionNonPremium() {
    return this.UInstitutionNonPremium;
  }
  constructor() {}
}
