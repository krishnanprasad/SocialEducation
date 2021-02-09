export class createwebinar {
    createdby: string;
    heading: string;
    webinarfee: number;
    currencytype: number;
    platformid: number;
    description: string;
    webinardate: Date;
    webinarimage: any;
    duration: number;
    organiserlist: string;
    topiclist: string;
    maxparticipantscount: number;
    webinarurl: string;
    webinarmeetingid: string;
    webinarpasscode: string; 
    webinartypeid: number;    

constructor(createdby,heading,webinarfee,currencytype,platformid,description,webinardate,
    webinarimage,duration,organiserlist,topiclist,maxparticipantscount,webinarurl,
    webinarmeetingid,webinarpasscode,webinartypeid    ) {
    this.createdby = createdby;
    this.heading=heading;
    this.webinarfee=webinarfee;
    this.currencytype = currencytype;
    this.platformid = platformid;
    this.description = description;
    this.webinardate = webinardate;
    this.webinarimage = webinarimage;
    this.duration = duration;
    this.organiserlist = organiserlist;
    this.topiclist = topiclist;
    this.maxparticipantscount = maxparticipantscount;
    this.webinarurl = webinarurl;
    this.webinarmeetingid = webinarmeetingid;
    this.webinarpasscode = webinarpasscode;
    this.webinartypeid = webinartypeid;    
  }
}
