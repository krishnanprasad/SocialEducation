export class createwebinar {
    createdby: string;
    webinarid: string;
    heading: string;
    description: string;
    webinarimage: string;
    topiclist: string;
    organiserlist: string;
    webinarfee: number;
    webinardate: Date;
    duration: number;
    maxparticipantscount: number;
    platform_title: string;
    platform_logo: string;
    currency_title: string;
    registration_status: number;
    registration_title: string;
    organisername: string;
    organiserimage: string;
    webinarurl: string;
    webinarmeetingid: string;
    webinarpasscode: string;
    webinarstatus: number;

    constructor(createdby,
        webinarid,
        heading,
        description,
        webinarimage,
        topiclist,
        organiserlist,
        webinarfee,
        webinardate,
        duration,
        maxparticipantscount,
        platform_title,
        platform_logo,
        currency_title,
        registration_status,
        registration_title,
        organisername,
        organiserimage,
        webinarurl,
        webinarmeetingid,
        webinarpasscode,
        webinarstatus) {
        webinarid = this.webinarid,
            heading = this.heading,
            description = this.description,
            webinarimage = this.webinarimage,
            topiclist = this.topiclist,
            organiserlist = this.organiserlist,
            webinarfee = this.webinarfee,
            webinardate = this.webinardate,
            duration = this.duration,
            maxparticipantscount = this.maxparticipantscount,
            platform_title = this.platform_title,
            platform_logo = this.platform_logo,
            currency_title = this.currency_title,
            registration_status = this.registration_status,
            registration_title = this.registration_title,
            organisername = this.organisername,
            organiserimage = this.organiserimage,
            webinarurl = this.webinarurl,
            webinarmeetingid = this.webinarmeetingid,
            webinarpasscode = this.webinarpasscode,
            webinarstatus = this.webinarstatus
    }
}
