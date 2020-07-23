import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinesGridDisplayComponent } from './cuisines-grid-display.component';

describe('CuisinesGridDisplayComponent', () => {
  let component: CuisinesGridDisplayComponent;
  let fixture: ComponentFixture<CuisinesGridDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisinesGridDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisinesGridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
