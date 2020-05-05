import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOwnerComponent } from './page-owner.component';

describe('PageOwnerComponent', () => {
  let component: PageOwnerComponent;
  let fixture: ComponentFixture<PageOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
