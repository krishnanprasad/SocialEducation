import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBadgesAComponent } from './topic-badges-a.component';

describe('TopicBadgesAComponent', () => {
  let component: TopicBadgesAComponent;
  let fixture: ComponentFixture<TopicBadgesAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicBadgesAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBadgesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
