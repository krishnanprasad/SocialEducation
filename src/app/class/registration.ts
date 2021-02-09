export class registration {
    registrationid:string;
    webinarid:String;
    participantid:String;
    registration_status:number;
    transactionid:string;
    

constructor(registrationid,webinarid,participantid,transactionid,registration_status ) {
    this.registrationid = registrationid;
    this.webinarid=webinarid;
    this.participantid=participantid;
    this.transactionid = transactionid;
    this.registration_status = registration_status;
  }
}
