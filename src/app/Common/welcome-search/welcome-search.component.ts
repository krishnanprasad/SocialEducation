import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-welcome-search',
  templateUrl: './welcome-search.component.html',
  styleUrls: ['./welcome-search.component.css']
})
export class WelcomeSearchComponent implements OnInit {
  searchText: { date: '', paid: '', q: '', topics: '' };
  PostDetails = [];
  searchinput: string;
  filters = [];
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
  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  filterDate(e) {
    var index = this.filters.findIndex(x => x == e.detail)
    if (index === -1) {
      this.filters.push(e.detail);
      this.searchText.date = e.value;
    }

  }
  filterPaid(e) {
    var index = this.filters.findIndex(x => x == e.detail)
    if (index === -1) {
      this.filters.push(e.detail);
      this.searchText.paid = e.value;
    }

  }


  searchtextboxfilter(val) {
    this.route.navigate(['/Search'], { queryParams: { q: val } });
  }

  addfilter(val) {
    this.filters.push(val);
    this.searchText.q = null;
  }
  removefilter(val) {
    this.filters = this.filters.filter(e => e !== val)
  }
}
