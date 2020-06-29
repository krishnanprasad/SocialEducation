import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestInsBComponent } from './suggest-ins-b.component';

describe('SuggestInsBComponent', () => {
  let component: SuggestInsBComponent;
  let fixture: ComponentFixture<SuggestInsBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestInsBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestInsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
