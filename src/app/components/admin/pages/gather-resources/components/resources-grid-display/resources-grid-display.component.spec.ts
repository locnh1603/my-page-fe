import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesGridDisplayComponent } from './resources-grid-display.component';

describe('ResourcesGridDisplayComponent', () => {
  let component: ResourcesGridDisplayComponent;
  let fixture: ComponentFixture<ResourcesGridDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesGridDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesGridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
