import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBadgesBComponent } from './topic-badges-b.component';

describe('TopicBadgesBComponent', () => {
  let component: TopicBadgesBComponent;
  let fixture: ComponentFixture<TopicBadgesBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicBadgesBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBadgesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
