import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsGridDisplayComponent } from './crafts-grid-display.component';

describe('CraftsGridDisplayComponent', () => {
  let component: CraftsGridDisplayComponent;
  let fixture: ComponentFixture<CraftsGridDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftsGridDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftsGridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
