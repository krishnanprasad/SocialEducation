import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleQuestionPaperDataService {
  public SingleQPData = {
    PostID: 'POS0005',
    UserImage: 'assets/Image/unknown1.jpg',
    UserName: 'Sriram',
    CommunityFrom: 'MCT 2014',
    QuestionPaper: {
      QuestionPaperId: 'QP001',
      subject: 'Group 2 : General Knowledge',
      description: 'Previous Year Questions',
      totalquestion: 10,
      duration: '30 Mins',
      level: 'Hard',
      Question: [
        {
          QuestionId: 'Ak001',
          Question: '1 Who has uttered these words His Sceptre shows the force of temporal power',
          Options: [
            { value: 'A', detail: 'Ak001 Hello' },
            { value: 'B', detail: 'Ak001 Hello 2' },
            { value: 'C', detail: 'Hello 3' },
            { value: 'D', detail: 'Hello 4' }
          ]
        },
        {
          QuestionId: 'Ak002',
          Question:
            '2 Who has uttered these words? His Sceptre shows the force of temporal power',
          Options: [
            { value: 'A', detail: 'Ak002 Hello' },
            { value: 'B', detail: 'Hello 2' },
            { value: 'C', detail: 'Hello 3' },
            { value: 'D', detail: 'Hello 4' }
          ]
        },
        {
          QuestionId: 'Ak003',
          Question:
            '3 Who has uttered these words? His Sceptre shows the force of temporal power',
          Options: [
            { value: 'A', detail: 'Ak003 Hello' },
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
            { value: 'A', detail: 'Ak004 Hello' },
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
            { value: 'A', detail: 'Ak005 Hello' },
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
            { value: 'A', detail: 'Ak006 Hello' },
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
            { value: 'A', detail: 'Ak007 Hello' },
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
            { value: 'A', detail: 'Ak008 Hello' },
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
            { value: 'A', detail: 'Ak009 Hello' },
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
            { value: 'A', detail: 'Ak010 Hello' },
            { value: 'B', detail: 'Hello 2' },
            { value: 'C', detail: 'Hello 3' },
            { value: 'D', detail: 'Hello 4' }
          ]
        }
      ]
    },
    ImageSrc: '',
    postlike: 10,
    postcomment: 6,
    postintrest: 1,
    postdownrate: 1
  };
  getQuestionPaper() {
    return this.SingleQPData;
  }
  constructor() { }
}
