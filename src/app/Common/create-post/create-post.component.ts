import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { questionformat } from '../../class/questionformat';
import { questionpaper } from 'src/app/class/questionpaper';
import { addquestionpaperpostservice } from '../../Service/addquestionpaperpostservice.service';
import { DlDateTimePickerModel } from 'angular-bootstrap-datetimepicker';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { WebinarService } from 'src/app/Service/webinar.service';
import { webinar } from 'src/app/class/webinar';
import { createwebinar } from 'src/app/class/createwebinar';
import { LoginService } from 'src/app/Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  organTemp: any = { Brief: '', Name: '', Type: "1" };
  webinardetails = new createwebinar('', '', '', 1, 0, '', new Date(), '', 1, '', '', 1, '', '', '',0);
  ShowDesign: boolean = false;
  public web_description;
  public web_heading;
  public ShowModal: any;
  public onQuestionCountChange: any;
  public web_fee: any;
  public web_fee_type: any;
  public web_totalDuration: any;
  public web_type: any;
  public web_type_count: any;
  public web_platform: any;
  selectedDate: DlDateTimePickerModel;
  Addedorganisers = [{ name: 'Krishnan', brief: 'M.E Physics | 14 Yrs Exp in Maths', type: 'Host' },]
  topics = [];
  webinardesigndata: any;
  searchText: String;
  imageUrl: string = "/assets/NoImage.jpg";
  fileToUpload: File = null;
  IsCalenderShowing: boolean = false;

  @ViewChild('searchdropdown-1') searchdropdown: ElementRef;


  topiclist = [
    { web_name: 'sports', web_tag: 'camel', date: '10/10/2020' },
    { web_name: 'language', web_tag: 'dog', date: '10/10/2020' },
    { web_name: 'physics', web_tag: 'lion', date: '10/10/2020' },
    { web_name: 'computer', web_tag: 'elephant', date: '10/10/2020' },
    { web_name: 'Beemo1', web_tag: 'fish', date: '10/10/2020' },
    { web_name: 'Beemo2', web_tag: 'crow', date: '10/10/2020' },
    { web_name: '#maths', web_tag: 'crow', date: '10/10/2020', type: "H" },
    { web_name: '#science', web_tag: 'crow', date: '10/10/2020', type: "H" },
    { web_name: '#mbbs', web_tag: 'crow', date: '10/10/2020', type: "H" }
  ]
  filterDatevalue: string;
  dropdownParentWidth: any;
  pageid: any;
  constructor(private _addquestionpaperpostservice: addquestionpaperpostservice,
    private modalService: ModalAService,
    private webinarService: WebinarService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private loader: LoaderAService
  ) { }
  ngOnInit() {
    this.loader.close();
    this.webinardetails.duration=5;
    this.pageid = this.route.parent.snapshot.params["pageid"];
    debugger
  }
  ngAfterInit() {
    this.dropdownParentWidth = this.searchdropdown.nativeElement.offsetWidth;
    console.log('dropdownParentWidth' + this.dropdownParentWidth);
    this.webinardetails.webinarimage='/assets/NoImage.jpg';
  }
  onUploadFinish(q) {
    debugger
    this.webinardetails.webinarimage = 'http://localhost:51181/'+q["dbPath"];
  }
  string_chop = function (str, size) {
    if (str == null) return [];
    str = String(str);
    size = ~~size;
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
  }
  ConfirmPost() {

    this.webinardetails.createdby =this.pageid;
    debugger
    this.webinardetails.topiclist = this.topics.toString();
    this.webinardetails.duration=Number(this.webinardetails.duration)
    this.webinardetails.platformid=Number(this.webinardetails.platformid)
    // var formData = new FormData();
    // formData.append('files', this.fileToUpload);

    //const formData: FormData = new FormData();
    //formData.append('files', this.fileToUpload); 
    //var a = this.string_chop(this.imageUrl, 255);
    debugger
    //var leftSide = this.imageUrl.slice(0, Math.floor(this.imageUrl.length / this.imageUrl.length - 2));
    if (this.webinardetails.webinarimage == null) {
      this.webinardetails.webinarimage = this.imageUrl;
    }

    this.webinarService.create_Webinar(this.webinardetails).subscribe(data => {
      //debugger
      if (data["status"] == 100) {

        this.router.navigate(['/Institution/Wall']);
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
    //return null;
    // debugger
  }
  // ngDoCheck() {
  //   debugger
  //   if (this.selectedDate)
  //     this.IsCalenderShowing = !this.IsCalenderShowing;;
  // }
  refresh() {
    //debugger
    this.IsCalenderShowing = !this.IsCalenderShowing;
  }

  handleFileInput(file: FileList) {
    debugger
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  showdesign() {
    this.ShowDesign = !this.ShowDesign;
    // console.log('web_heading' + this.web_heading);
    this.webinardesigndata = {
      heading: this.web_heading,
      description: this.web_description,
      date: this.selectedDate,
      duration: this.web_totalDuration,
      organiserlist: this.Addedorganisers,
      platform: this.web_platform,
      topics: this.topics,
      organisers: this.web_totalDuration,
      type: this.web_type,
      participantcount: this.web_type_count,
      feetype: this.web_fee_type,
      fee: this.web_fee
    }

    this.openModal('design-modal');
  }
  // hidecalender() {
  //   this.IsCalenderShowing = !this.IsCalenderShowing;
  //   this.selectedDate = null;
  // }
  searchtextboxfilter(val) {
    var index = this.topics.findIndex(x => x == val)
    if (index === -1) {
      this.topics.push(val);
    }
    this.searchText = "";
  }
  addfilter(val) {
    this.topics.push(val);
    this.searchText = null;
  }
  removefilter(val) {
    this.topics = this.topics.filter(e => e !== val)
  }

  openModal(id: string) {
    //debugger
    if (id == 'design-modal') {
      this.ShowDesign = true;
    }
    this.modalService.open(id);
  }

  closeModal(id: string) {
    //debugger
    if (id == 'design-modal') {
      this.ShowDesign = false;
    }
    this.modalService.close(id);
  }
}
