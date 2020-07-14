import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatherCraftsComponent } from './gather-crafts.component';

describe('GatherCraftsComponent', () => {
  let component: GatherCraftsComponent;
  let fixture: ComponentFixture<GatherCraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatherCraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatherCraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
