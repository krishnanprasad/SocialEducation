import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstPostListBComponent } from './inst-post-list-b.component';

describe('InstPostListBComponent', () => {
  let component: InstPostListBComponent;
  let fixture: ComponentFixture<InstPostListBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstPostListBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstPostListBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
