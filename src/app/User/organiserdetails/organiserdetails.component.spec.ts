import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiserdetailsComponent } from './organiserdetails.component';

describe('OrganiserdetailsComponent', () => {
  let component: OrganiserdetailsComponent;
  let fixture: ComponentFixture<OrganiserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
