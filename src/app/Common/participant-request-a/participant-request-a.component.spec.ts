import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantRequestAComponent } from './participant-request-a.component';

describe('ParticipantRequestAComponent', () => {
  let component: ParticipantRequestAComponent;
  let fixture: ComponentFixture<ParticipantRequestAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantRequestAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantRequestAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
