import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionMainPageComponent } from './institution-main-page.component';

describe('InstitutionMainPageComponent', () => {
  let component: InstitutionMainPageComponent;
  let fixture: ComponentFixture<InstitutionMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
