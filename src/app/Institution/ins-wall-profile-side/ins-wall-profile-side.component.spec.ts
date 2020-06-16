import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsWallProfileSideComponent } from './ins-wall-profile-side.component';

describe('InsWallProfileSideComponent', () => {
  let component: InsWallProfileSideComponent;
  let fixture: ComponentFixture<InsWallProfileSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsWallProfileSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsWallProfileSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
