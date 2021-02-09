import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowTutorAComponent } from './follow-tutor-a.component';

describe('FollowTutorAComponent', () => {
  let component: FollowTutorAComponent;
  let fixture: ComponentFixture<FollowTutorAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowTutorAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowTutorAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
