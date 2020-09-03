import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionStatsDetailsComponent } from './champion-stats-details.component';

describe('ChampionStatsDetailsComponent', () => {
  let component: ChampionStatsDetailsComponent;
  let fixture: ComponentFixture<ChampionStatsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionStatsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionStatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
