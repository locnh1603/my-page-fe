import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChampionStatsDisplay } from '@modules/main/pages/champion-stats/models/champion-stats-display.model';

@Component({
  selector: 'app-champion-stats-details',
  templateUrl: './champion-stats-details.component.html',
  styleUrls: ['./champion-stats-details.component.css']
})
export class ChampionStatsDetailsComponent implements OnInit, OnChanges {

  @Input() champion: ChampionStatsDisplay;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.champion) {
      console.log(this.champion);
    }
  }

}
