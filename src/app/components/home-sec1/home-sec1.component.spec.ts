import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec1Component } from './home-sec1.component';

describe('HomeSec1Component', () => {
  let component: HomeSec1Component;
  let fixture: ComponentFixture<HomeSec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
