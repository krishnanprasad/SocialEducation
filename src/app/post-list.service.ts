import { Injectable } from '@angular/core';
import { OptionClass } from './class/option';
import { from } from 'rxjs';
import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  public OfferingContent = [
    {
      PostID: 'POS0001',
      PostType: 'Offering',
      Subject: 'Travel',
      UserImage: 'assets/Image/unknown1.jpg',
      UserName: 'Krishnan',
      Message: 'I am travelling by 8.30 am by car i can accomadate two people',
      CommunityFrom: 'MCT 2014',
      ImageSrc: '',
      FromLocation: 'Sholinganallur',
      ToLocation: 'Velachery',
      postlike: 10,
      postcomment: 6,
      postintrest: 1,
      postdownrate: 1,
      Comment:
        'How Travelling is where i want to get in, How much luggange can i carry please update me as soon as possible'
    },
    {
      PostID: 'POS0003',
      PostType: 'Offering',
      Subject: 'Ticket',
      UserImage: 'assets/Image/employee2.jpg',
      UserName: 'Vignesh',
      Message: 'Hey i am having two tickets for kaala movie in Ganga Theatre',
      CommunityFrom: 'Ceebros Imperiale',
      ImageSrc: 'assets/Image/movieticket.jpg',
      webinar_date: '22/10/2018 10:30',
      ToLocation: 'Ganga Theatre',
      postlike: 3,
      postcomment: 10,
      postintrest: 1,
      postdownrate: 1
    }
  ];
  public PostDetails = [
    {
      webinarid:'1',
      webinarfee: 0,
      webimage: 'w1.jpg',
      platform_title: 'Jio Meet',
      webstatus: 1,
      heading: 'Unleash your productivity and bring Salesforce Project Management to the next level with Mission Control',
      description: '',
      webinardate: '2020-07-15 18:00',
      duration: '30 Mins',
      organiserlist: [{ name: 'Krishnan', brief: 'M.E Physics | 14 Yrs Exp in Maths', type: 'Host', orgimage: 'o2.jpg', star: 3.5 }],
      participantcount: 20,
      maxparticipantscount: 10,
      topiclist: ['#maths', '#physics']
    },
    {
      webinarid:'2',
      webinarfee: 100,
      webimage: 'w2.jpg',
      platform_title: 'Zoom',
      webstatus: 1,
      heading: 'WEBINAR OWWI 2020 dengan Tema “Improve Your Creativity In Industrial Era 4.0 Based On IOT And Artifical Intellegience”',
      description: '',
      webinardate: '2020-07-22 18:00',
      duration: '30 Mins',
      organiserlist: [{ name: 'Saravanan', brief: 'M.E Physics | 14 Yrs Exp in Maths', type: 'Host', orgimage: 'o3.jpg', star: 4.7 }],
      participantcount: 20,
      participantavailablecount: 5,
      topiclist: ['#maths', '#physics']
    },
    {
      webinarid:'3',
      webinarfee: 2000,
      webimage: 'w3.jpg',
      platform_title: 'Zoho Meetings',
      webstatus: 1,
      heading: 'We *Aj Unlimited* presenting you 5 days workshop on 2.0 leadership skills',
      description: '',
      webinardate: '2020-07-14 18:00',
      duration: '30 Mins',
      organiserlist: [{ name: 'Sarath Kumar', brief: 'M.E Physics | 14 Yrs Exp in Maths', type: 'Host', orgimage: 'o1.jpg', star: 4.5 }],
      participantcount: 20,
      participantavailablecount: 2,
      topiclist: ['#maths', '#physics']
    },
    {
      webinarid:'4',
      webinarfee: 0,
      webimage: 'w1.jpg',
      platform_title: 'Google Meet',
      webstatus: 1,
      heading: 'Unleash your productivity and bring Salesforce Project Management to the next level with Mission Control',
      description: '',
      webinardate: '2020-07-15 18:00',
      duration: '30 Mins',
      organiserlist: [{ name: 'Krishnan', brief: 'M.E Physics | 14 Yrs Exp in Maths', type: 'Host', orgimage: 'o2.jpg', star: 3.5 }],
      participantcount: 20,
      participantavailablecount: 10,
      topiclist: ['#maths', '#physics']
    },

  ];
  public InstitutionPostDetails = [
    {
      PostID: 'POS0001',
      AccessCode: 1,
      UserImage: 'assets/Image/employee2.jpg',
      UserName: 'Institution Name',
      QuestionPaperLink: {
        editable: false,
        QuestionPaperId: 'QP001',
        subject: 'Group 2 : General Knowledge',
        description: 'Previous Year Questions',
        totalquestion: 10,
        duration: '30 Mins',
        level: 'Hard',
        Question: [
          {
            QuestionId: 'Ak001',
            Question: 'Who has uttered these words His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak002',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak003',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak004',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak005',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak006',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak007',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak008',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak009',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak0010',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          }
        ]
      },

    },

    {
      PostID: 'POS0005',
      AccessCode: 0,
      UserImage: 'assets/Image/employee2.jpg',
      UserName: 'Institution Name',
      QuestionPaperLink: {
        editable: true,
        QuestionPaperId: 'QP001',
        subject: 'Group 2 : General Knowledge',
        description: 'Previous Year Questions',
        totalquestion: 10,
        duration: '30 Mins',
        level: 'Hard',
        Question: [
          {
            QuestionId: 'Ak001',
            Question: 'Who has uttered these words His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak002',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak003',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak004',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak005',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak006',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak007',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak008',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak009',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          },
          {
            QuestionId: 'Ak0010',
            Question:
              'Who has uttered these words? His Sceptre shows the force of temporal power',
            Options: [
              { value: 'A', detail: 'Hello' },
              { value: 'B', detail: 'Hello 2' },
              { value: 'C', detail: 'Hello 3' },
              { value: 'D', detail: 'Hello 4' }
            ]
          }
        ]
      },
    },


    // {
    //   PostID: 'POS0003',
    //   UserImage: 'assets/Image/employee2.jpg',
    //   UserName: 'Institution Name',
    //   Message: 'Most Important formula which is used for all exams',
    //   ImageSrc: 'assets/Image/Formula.png',
    //   postlike: 3,
    //   postcomment: 10,
    //   postintrest: 1,
    //   postdownrate: 1
    // },
    // {
    //   PostID: 'POS0004',
    //   UserImage: 'assets/Image/employee2.jpg',
    //   UserName: 'Institution Name',
    //   Message: 'Learn Bootstrap I recommend personally',
    //   VideoSrc: 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
    //   postlike: 13,
    //   postcomment: 10,
    //   postintrest: 1,
    //   postdownrate: 1
    // }
  ];

  public onlineclasspost = [
    {
      PostID: 'POS0001',
      AccessCode: 1,
      UserImage: 'assets/Image/employee2.jpg',
      UserName: 'Institution Name',
      QuestionPaperLink: {
        editable: false,
        QuestionPaperId: 'QP001',
        subject: 'Group 2 : General Knowledge',
        description: 'Previous Year Questions',
        totalquestion: 10,
        duration: '30 Mins',
        level: 'Hard',

      },

    },

    {
      PostID: 'POS0005',
      AccessCode: 0,
      UserImage: 'assets/Image/employee2.jpg',
      UserName: 'Institution Name',
      QuestionPaperLink: {
        editable: true,
        QuestionPaperId: 'QP001',
        subject: 'Group 2 : General Knowledge',
        description: 'Previous Year Questions',
        totalquestion: 10,
        duration: '30 Mins',
        level: 'Hard',

      },
    },

  ];
  constructor() { }
  getpostwalllist() {
    return this.PostDetails;
  }
  getinstitutionpostlist() {
    return this.InstitutionPostDetails;
  }
  getpostwalllistFiltered(Data) {
    if (Data === 'Offering') {
      return this.OfferingContent;
    }
  }
}
