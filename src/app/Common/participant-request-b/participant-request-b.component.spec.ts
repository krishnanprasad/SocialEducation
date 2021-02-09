import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantRequestBComponent } from './participant-request-b.component';

describe('ParticipantRequestBComponent', () => {
  let component: ParticipantRequestBComponent;
  let fixture: ComponentFixture<ParticipantRequestBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantRequestBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantRequestBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
