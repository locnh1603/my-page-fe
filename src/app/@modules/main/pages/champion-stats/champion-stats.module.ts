import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChampionStatsComponent } from '@modules/main/pages/champion-stats/champion-stats.component';
import { ChampionStatsRoutingModule } from '@modules/main/pages/champion-stats/champion-stats-routing.module';
@NgModule({
  declarations: [
    ChampionStatsComponent,
  ],
  imports: [
    ChampionStatsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ChampionStatsModule { }
