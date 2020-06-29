import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { questionformat } from '../../class/questionformat';
import { questionpaper } from 'src/app/class/questionpaper';
import { addquestionpaperpostservice } from '../../Service/addquestionpaperpostservice.service';
import { DlDateTimePickerModel } from 'angular-bootstrap-datetimepicker';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  organTemp: any = { Brief: '', Name: '', Type: "1" };
  searchText: String;
  selectedDate: DlDateTimePickerModel;
  IsCalenderShowing: boolean = false;
  public chooseWebinarFee: string = 'free';
  public questionHeading;
  public ShowModal: any;
  public onQuestionCountChange: any;
  public totalDuration: any;
  @ViewChild('searchdropdown-1') searchdropdown: ElementRef;
  filters = [];
  Addedorganisers = [{ name: 'Krishnan', brief: 'M.E Physics | 14 Yrs Exp in Maths', type: 'Host' },]
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
  dropdownParentWidth: any;
  constructor(private _addquestionpaperpostservice: addquestionpaperpostservice,
    private modalService: ModalAService
  ) { }
  ngOnInit() {

  }
  ngAfterInit() {
    this.dropdownParentWidth = this.searchdropdown.nativeElement.offsetWidth;
    console.log('dropdownParentWidth' + this.dropdownParentWidth);
  }

  ConfirmPost() {
    return null;
  }
  ngDoCheck() {
    if (this.selectedDate)
      this.IsCalenderShowing = !this.IsCalenderShowing;;
  }
  hidecalender() {
    this.IsCalenderShowing = !this.IsCalenderShowing;
    this.selectedDate = null;
  }
  searchtextboxfilter(val) {
    var index = this.filters.findIndex(x => x == val)
    if (index === -1) {
      this.filters.push(val);
    }
    this.searchText = "";
  }
  addfilter(val) {
    this.filters.push(val);
    this.searchText = null;
  }
  removefilter(val) {
    this.filters = this.filters.filter(e => e !== val)
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
