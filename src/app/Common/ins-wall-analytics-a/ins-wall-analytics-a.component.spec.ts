import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsWallAnalyticsAComponent } from './ins-wall-analytics-a.component';

describe('InsWallAnalyticsAComponent', () => {
  let component: InsWallAnalyticsAComponent;
  let fixture: ComponentFixture<InsWallAnalyticsAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsWallAnalyticsAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsWallAnalyticsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
