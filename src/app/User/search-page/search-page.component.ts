import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchText: String;
  filters=[];
  characters = [
    { username: 'Finn the human', webinar: 'camel', date: '10/10/2020' },
    { username: 'Jake the dog', webinar: 'dog', date: '10/10/2020' },
    { username: 'Princess bubblegum', webinar: 'lion', date: '10/10/2020' },
    { username: 'Lumpy Space Princess', webinar: 'elephant', date: '10/10/2020' },
    { username: 'Beemo1', webinar: 'fish', date: '10/10/2020' },
    { username: 'Beemo2', webinar: 'crow', date: '10/10/2020' },
    { username: '#maths', webinar: 'crow', date: '10/10/2020',type:"H" },
    { username: '#science', webinar: 'crow', date: '10/10/2020',type:"H" },
    { username: '#mbbs', webinar: 'crow', date: '10/10/2020',type:"H" }
  ]

  constructor() { }

  ngOnInit() {
  }
  addfilter(val){
    this.filters.push(val);
    this.searchText=null;
  }
}
