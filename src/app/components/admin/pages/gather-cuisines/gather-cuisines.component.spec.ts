import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatherCuisinesComponent } from './gather-cuisines.component';

describe('GatherCuisinesComponent', () => {
  let component: GatherCuisinesComponent;
  let fixture: ComponentFixture<GatherCuisinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatherCuisinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatherCuisinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
