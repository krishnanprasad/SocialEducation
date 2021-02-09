import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsAboutComponent } from './ins-about.component';

describe('InsAboutComponent', () => {
  let component: InsAboutComponent;
  let fixture: ComponentFixture<InsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
