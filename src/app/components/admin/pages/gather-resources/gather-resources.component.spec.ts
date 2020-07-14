import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatherResourcesComponent } from './gather-resources.component';

describe('GatherResourcesComponent', () => {
  let component: GatherResourcesComponent;
  let fixture: ComponentFixture<GatherResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatherResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatherResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
