import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAComponent } from './dropdown-a.component';

describe('DropdownAComponent', () => {
  let component: DropdownAComponent;
  let fixture: ComponentFixture<DropdownAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
