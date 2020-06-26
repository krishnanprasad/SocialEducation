import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsWallProfileTopComponent } from './ins-wall-profile-top.component';

describe('InsWallProfileTopComponent', () => {
  let component: InsWallProfileTopComponent;
  let fixture: ComponentFixture<InsWallProfileTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsWallProfileTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsWallProfileTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
