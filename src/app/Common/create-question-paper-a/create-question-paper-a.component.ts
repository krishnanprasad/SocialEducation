import { Component, OnInit } from '@angular/core';
import { questionformat } from '../../class/questionformat';
import { questionpaper } from 'src/app/class/questionpaper';
import {addquestionpaperpostservice} from '../../Service/addquestionpaperpostservice.service';
@Component({
  selector: 'app-create-question-paper-a',
  templateUrl: './create-question-paper-a.component.html',
  styleUrls: ['./create-question-paper-a.component.css']
})
export class CreateQuestionPaperAComponent implements OnInit {
  questionpaper:questionpaper;
  totaloptions: number;
   _questionformat: questionformat ;
  questionbank: Array<questionformat>=[];
  ShowModal:boolean;
  questionHeading:string;
  totalTime:number;
  totalQuestions: any;
  constructor(private _addquestionpaperpostservice:addquestionpaperpostservice) { }
  changeValueOfAnswer(id, event) {
    this.alterAnswerValue(id, event.currentTarget.value);

  }
  changeValueofArray(id, value, type) {

    switch (type) {
      case "question": {
        this.questionbank[id].question = value;
        //statements; 
        break;
      }
      case "optiona": {
        this.questionbank[id].optiona = value;
        //statements; 
        break;
      }
      case "optionb": {
        this.questionbank[id].optionb = value;
        //statements; 
        break;
      }
      case "optionc": {
        this.questionbank[id].optionc = value;
        //statements; 
        break;
      }
      case "optiond": {
        this.questionbank[id].optiond = value;
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
    // this.tempbidValue[id] = value;
    //  this.questionbank[id].question = value;
    //return id;
  }
  makeTextBoxNR(id, value, type) {
    //debugger
    switch (type) {

      case "optiona": {
        if (value) {
          this.questionbank[id].optiona = "*NR*";
        }
        else{
          this.questionbank[id].optiona = "";
        }
        //console.log(this.questionbank[id]);
        //statements; 
        break;
      }
      case "optionb": {
        if (value) {
          this.questionbank[id].optionb = "*NR*";
        }
        else{
          this.questionbank[id].optionb = "";
        }
        //statements; 
        break;
      }
      case "optionc": {
        if (value) {
          this.questionbank[id].optionc = "*NR*";
        }
        else{
          this.questionbank[id].optionc = "";
        }
        //statements; 
        break;
      }
      case "optiond": {
        if (value) {
          this.questionbank[id].optiond = "*NR*";
        }
        else{
          this.questionbank[id].optiond = "";
        }
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

  }

  onSelectFile(event,id) {
    //debugger
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        //debugger
        //this.questionbank[id].image = event.target.result as string;
      }
    }
  }
  ConfirmPost() {
    //alert(this.questionbank);
    //debugger
    this.ShowModal=true;
    console.log(this.questionpaper);
    this.sendToServer();
  }
  closemodal(){
    this.ShowModal=false;
  }
  ngOnInit() {
    this.questionpaper=new questionpaper();
    this.totalTime = 5;
    this.questionHeading = '';    
    this.totaloptions = 2
  }
  ShowHideItems() {
  }
  onTimeAlter(type) {
    //debugger;
    switch (type) {
      case "Add": {
        
        this.questionpaper.totalTime= this.questionpaper.totalTime + 5;
        break;
      }
      case "Reduce": {
        if( this.questionpaper.totalTime>5)
        this.questionpaper.totalTime= this.questionpaper.totalTime - 5;
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }
  alterAnswerValue(id, option) {
    //debugger
    switch (option) {
      case "a": {
        if (this.questionbank[id].optiona != null && this.questionbank[id].optiona != "") {
          this.questionbank[id].answer = this.questionbank[id].optiona;
        }
        console.log(this.questionbank);
        break;
      }
      case "b": {
        if (this.questionbank[id].optionb != null && this.questionbank[id].optionb != "") {
          this.questionbank[id].answer = this.questionbank[id].optionb;
        }
        //statements; 
        break;
      }
      case "c": {
        if (this.questionbank[id].optionc != null && this.questionbank[id].optionc != "") {
          this.questionbank[id].answer = this.questionbank[id].optionc;
        }
        //statements; 
        break;
      }
      case "d": {
        if (this.questionbank[id].optiond != null && this.questionbank[id].optiond != "") {
          this.questionbank[id].answer = this.questionbank[id].optiond;
        }
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }
  onQuestionCountChange(newvalue) {

    this.totalQuestions = newvalue;

    this.alterQuestionCount(newvalue);
    console.log(this.questionbank);

  }
  // readURL($event: Event): void {
  //   {
  //     const file = (<HTMLInputElement>event.target).files[0];

  //     const reader = new FileReader();
  //     reader.onload = e => this.imageSrc = reader.result;
  //     reader.readAsDataURL(file);
  //   }
  // }
  alterQuestionCount(value) {
//debugger
    switch (value) {
      case "5": {
        this.questionbank = [];
        for (var i = 0; i < 5; i++) {
          //debugger
          //this._questionformat=new questionformat();
          this.questionbank.push(new questionformat());
        }
        //debugger
        //statements; 
        break;
      }
      case "10": {
        this.questionbank = [];
        for (var i = 0; i < 10; i++) {
          this.questionbank.push(new questionformat());
        }
        //statements; 
        break;
      }
      case "15": {
        this.questionbank = [];
        for (var i = 0; i < 15; i++) {
          //console.log(this.questionbank.push({ question: "", optiona: "", optionb: "", optionc: "", optiond: "", answer: "",image:"",hints:"" }));
          this.questionbank.push(new questionformat());
        }
        //statements; 
        break;
      }
      case "20": {
        this.questionbank = [];
        for (var i = 0; i < 20; i++) {
          this.questionbank.push(new questionformat());
        }
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }
  sendToServer(){
    //debugger
    
    //debugger
    this.questionpaper.questionHeading=this.questionHeading;
    this.questionpaper.totalTime=this.totalTime;
    this.questionpaper.totalQuestions=this.totalQuestions;
    this.questionpaper.questions=this.questionbank;
    this._addquestionpaperpostservice.addQuestionPaper(this.questionpaper).subscribe(userTransaction => {
      if (userTransaction != "No User") {
      //debugger;
        // this.transactionList = userTransaction;
        // this.Iserror = false;
      }
      else {

       // this.Iserror = true;
       // this.errorMessage = "Welcome New User";
       // console.log('Password' + this.errorMessage);
      }
    }
    )
  }

}
