import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionPaperAComponent } from './create-question-paper-a.component';

describe('CreateQuestionPaperAComponent', () => {
  let component: CreateQuestionPaperAComponent;
  let fixture: ComponentFixture<CreateQuestionPaperAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestionPaperAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionPaperAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
