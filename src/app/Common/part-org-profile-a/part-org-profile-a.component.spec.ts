import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOrgProfileAComponent } from './part-org-profile-a.component';

describe('PartOrgProfileAComponent', () => {
  let component: PartOrgProfileAComponent;
  let fixture: ComponentFixture<PartOrgProfileAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOrgProfileAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOrgProfileAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
