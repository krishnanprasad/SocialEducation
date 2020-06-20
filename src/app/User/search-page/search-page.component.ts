import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchText: String;
  filters = [];
  characters = [
    { username: 'Finn the human', webinar: 'camel', date: '10/10/2020' },
    { username: 'Jake the dog', webinar: 'dog', date: '10/10/2020' },
    { username: 'Princess bubblegum', webinar: 'lion', date: '10/10/2020' },
    { username: 'Lumpy Space Princess', webinar: 'elephant', date: '10/10/2020' },
    { username: 'Beemo1', webinar: 'fish', date: '10/10/2020' },
    { username: 'Beemo2', webinar: 'crow', date: '10/10/2020' },
    { username: '#maths', webinar: 'crow', date: '10/10/2020', type: "H" },
    { username: '#science', webinar: 'crow', date: '10/10/2020', type: "H" },
    { username: '#mbbs', webinar: 'crow', date: '10/10/2020', type: "H" }
  ]
  filterDatevalue: string;

  DateFilterdata = [
    { detail: 'Today', value: '0' },
    { detail: 'Tomorrow', value: '1' },
    { detail: 'Next 7 Days', value: '7' },
    { detail: 'Next 30 Days', value: '30' },
  ]

  PaidFilterdata = [
    { detail: 'Free', value: '0' },
    { detail: 'Paid', value: '1' },
  ]
  isShowFilter: boolean;
  filterPaidvalue: any;

  constructor() { }

  ngOnInit() {
  }
  addfilter(val) {
    this.filters.push(val);
    this.searchText = null;
  }

  filterDate(e) {
    this.filterDatevalue = e.value;
    var index = this.filters.findIndex(x => x == e.detail)
    if (index === -1) {
      this.filters.push(e.detail);
    }

  }
  filterPaid(e) {
    debugger
    this.filterPaidvalue = e.value;
    var index = this.filters.findIndex(x => x == e.detail)
    if (index === -1) {
      this.filters.push(e.detail);
    }
    // this.filters.indexOf(e) === -1 ? this.filters.push(e.detail) : null;

  }
  
  toggleShowfilter() {
    this.isShowFilter = !this.isShowFilter
  }
  searchtextboxfilter(val){
        var index = this.filters.findIndex(x => x == val)
    if (index === -1) {
      this.filters.push(val);
    }
    this.searchText="";
  }
  removefilter(val) {
    this.filters = this.filters.filter(e => e !== val)
  }
}
