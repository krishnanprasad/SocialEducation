import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBComponent } from './banner-b.component';

describe('BannerBComponent', () => {
  let component: BannerBComponent;
  let fixture: ComponentFixture<BannerBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
