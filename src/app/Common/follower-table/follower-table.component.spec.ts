import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerTableComponent } from './follower-table.component';

describe('FollowerTableComponent', () => {
  let component: FollowerTableComponent;
  let fixture: ComponentFixture<FollowerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
