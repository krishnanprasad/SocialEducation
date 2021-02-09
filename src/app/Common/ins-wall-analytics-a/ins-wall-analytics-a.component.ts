import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { oraganiserService } from 'src/app/Service/oraganiser.service ';

@Component({
  selector: 'app-ins-wall-analytics-a',
  templateUrl: './ins-wall-analytics-a.component.html',
  styleUrls: ['./ins-wall-analytics-a.component.css']
})
export class InsWallAnalyticsAComponent implements OnInit {
  dashboarddata: any;

  constructor( private loginService: LoginService,    private orgservice: oraganiserService,) { }

  ngOnInit() {
    this.dashboarddata_INIT();
    debugger
  }
  dashboarddata_INIT(){
    this.orgservice.get_dashboard_data(this.loginService.getUserId()).subscribe(data => {
      if (data["status"] == 100) {
        this.dashboarddata = data["result"];
        
      }
      else if (data["status"] == 300) {
       


      }
      else if (data["status"] == 400) {
       
      }
    }, (err) => {

    });
  }
}
