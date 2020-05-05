import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css']
})
export class InstitutionsComponent implements OnInit {
  @Input() Edit;
  public Editable;
  public InstitutionsList = [
    {
      InstitutionName: 'Sri Krishna College of Engineering and Technology, Coimbatore',
      CourseName: 'B.E Meachatronics ',
      // tslint:disable-next-line:max-line-length
      Description: '4 years of Meachatronics Enginnering with Zero Arrear and 2 Paper Presentations',
      FromTimeLine: 'March 2014',
      ToTimeLine: 'Learning',
      TotalTimeLine: '4.1 Yrs',
    },
    {
      InstitutionName: 'New Prince Matriculation Higher Secondary School, Chennai',
      CourseName: '12th',
      // tslint:disable-next-line:max-line-length
      Description: '12th Standard Computer Science Group With top excellance of School First in Final Examination',
      FromTimeLine: 'March 2012',
      ToTimeLine: 'March 2014',
      TotalTimeLine: '2 Yrs',
    }
  ];
  constructor() { }

  ngOnInit() {
    this.Editable = this.Edit;
  }

}
