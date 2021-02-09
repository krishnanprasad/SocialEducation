import { Component, OnInit, Input } from '@angular/core';
import { ModalAService } from 'src/app/Modal/Modal-a/modal-a.service';
import { UserDetailsService } from 'src/app/Service/user-details.service';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-topic-badges-a',
  templateUrl: './topic-badges-a.component.html',
  styleUrls: ['./topic-badges-a.component.css']
})
export class TopicBadgesAComponent implements OnInit {
  topiclist: string[];
  searchinput: String;
  usertopicpass = { userid: null, usertype: null, topiclist: null };
  constructor(
    private modalService: ModalAService,
    private userdetails: UserDetailsService,
    private loginService: LoginService
  ) { }
  searchtopics = [
    '#camel', '#food', '#eating', '#covid'
  ]
  ngOnInit() {
    // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.topiclist = ['#Maths', '#Science', '#Social', '#covid19', '#Diabetics'];
  }
  addtopic(val) {
   // debugger
    if (this.topiclist.length < 5) {
      this.topiclist.push(val);
      this.searchinput = "";
    }
    else {
      alert('Cannot Add more than 5');
    }
  }
  removetopic(val) {
   // debugger
    this.topiclist = this.topiclist.filter(e => e !== val)
  }
 
  gettopic_INIT() {
    this.userdetails.get_user_topics(this.loginService.getUsertype(), this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
     //   debugger;
        this.topiclist= (data["result"]).split(',');;
        //this.editUserDetailsBasic=this.UserDetailsBasic;
       // debugger
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
  savetopic() {
   // debugger
    var JsonTopicList = JSON.stringify(this.topiclist)
    this.usertopicpass.userid = this.loginService.getUserId()
    this.usertopicpass.usertype = this.loginService.getUsertype()
    this.usertopicpass.topiclist = JsonTopicList
    this.userdetails.edit_user_topics(this.usertopicpass).subscribe(data => {
      if (data["status"] == 100) {
        this.closeModal('add-profile-topic');
      }
      else if (data["status"] == 300) {
        return null;
      }
    }, (err) => {

    });
  }
}

