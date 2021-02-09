import { Component, OnInit } from '@angular/core';
import { PostListService } from 'src/app/post-list.service';
import { ActivatedRoute } from '@angular/router';
import { DlDateTimePickerModel, DL_DATE_TIME_DISPLAY_FORMAT_DEFAULT } from 'angular-bootstrap-datetimepicker';
import { UserDetailsService } from 'src/app/Service/user-details.service';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';
import { formatDate } from '@angular/common';
import { DatepickerViewModel } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepagetwo',
  templateUrl: './homepagetwo.component.html',
  styleUrls: ['./homepagetwo.component.css']
})
export class HomepagetwoComponent implements OnInit {

  public selectedDate: any=new Date();
  getStartDate:any=new Date();
  dateToggleV:boolean=false;
  searchText = { date: this.selectedDate, paid: '', q: '', topics: '' };
  PostDetails = [];
  filters = [];
  searchinput: any;
  characters = [
    { web_name: 'Finn the human', web_tag: 'camel', date: '10/10/2020' },
    { web_name: 'Jake the dog', web_tag: 'dog', date: '10/10/2020' },
    { web_name: 'Princess bubblegum', web_tag: 'lion', date: '10/10/2020' },
    { web_name: 'Lumpy Space Princess', web_tag: 'elephant', date: '10/10/2020' },
    { web_name: 'Beemo1', webinar: 'fish', web_tag: '10/10/2020' },
    { web_name: 'Beemo2', webinar: 'crow', web_tag: '10/10/2020' },
    { web_name: '#maths', webinar: 'crow', web_tag: '10/10/2020', type: "H" },
    { web_name: '#science', webinar: 'crow', web_tag: '10/10/2020', type: "H" },
    { web_name: '#mbbs', webinar: 'crow', web_tag: '10/10/2020', type: "H" }
  ]
  filterDatevalue: string;
  filterfee: any = -1;
  changetab(tabname) {
    this.activetab = tabname;

  }
  DateFilterdata = [
    { detail: 'Today', value: '0' },
    { detail: 'Tomorrow', value: '1' },
    { detail: 'Next 7 Days', value: '7' },
    { detail: 'Next 30 Days', value: '30' },
  ]

  PaidFilterdata = [
    { detail: 'All', value: -1 },
    { detail: 'Free', value: 0 },
    { detail: 'Paid', value: 1 },

  ]

  Categorydata = [
    { detail: 'Live', value: 1 },
    { detail: 'One-One Meeting', value: 2 },
    { detail: 'Recorded Program', value:3 },
  ]
  isShowFilter: boolean=false;
  webinarresults: any;
  public activetab = 'webinar';
  organiserresults: any;
  constructor(private _userService: UserDetailsService, private route: ActivatedRoute, private loader: LoaderAService) { }

  ngOnInit() {
    debugger
    this.selectedDate = new Date();
   // this.selectedDate = new NgbDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDay())
    //this.selectedDate.activeDate = Number(formatDate(new Date(), 'dd', 'en-US', '+0630'));
    debugger
    this.route.queryParams.subscribe(params => {
      console.log(params); // {order: "popular"}
      this.searchText.q = params.q || null;
      if (this.searchText != null) {
        // this.addfilter(this.searchText.q)  // popular
      }
    });
    this.searchText.date = this.selectedDate;

    this.loader.close();
  }
  filterDate(e) {

  }

  toggledateView(){
    debugger
    this.dateToggleV =!this.dateToggleV;
  }
  filterPaid(e) {
    this.filterfee = e.value;
  }

  onSearchChange(value) {
    // debugger
    if (this.activetab == 'webinar') {
      this.searchwebinar(value);
    }
    else if (this.activetab == 'organiser') {
      this.searchorganiser(value);
    }
  }
  searchwebinar(value) {
    debugger
    this._userService.get_search_webinar(value).subscribe(data => {
      if (data["status"] == 100) {
        this.webinarresults = data["result"];


      }
      else if (data["status"] == 300) {


      }
      else if (data["status"] == 400) {

      }
    }, (err) => {

    });
  }
  searchorganiser(value) {
    this._userService.get_search_organiser(value).subscribe(data => {
      if (data["status"] == 100) {
        this.organiserresults = data["result"];
        this.activetab = 'organiser';
        console.log('Active Tab Search organiser result--' + this.activetab);
      }
      else if (data["status"] == 300) {


      }
      else if (data["status"] == 400) {

      }
    }, (err) => {

    });
  }
}
