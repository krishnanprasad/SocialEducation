import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBadgeCComponent } from './topic-badge-c.component';

describe('TopicBadgeCComponent', () => {
  let component: TopicBadgeCComponent;
  let fixture: ComponentFixture<TopicBadgeCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicBadgeCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBadgeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
