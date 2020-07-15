import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingQueryDisplayComponent } from './landing-query-display.component';

describe('LandingQueryDisplayComponent', () => {
  let component: LandingQueryDisplayComponent;
  let fixture: ComponentFixture<LandingQueryDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingQueryDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingQueryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
