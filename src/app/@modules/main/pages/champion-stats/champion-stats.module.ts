import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChampionStatsComponent } from '@modules/main/pages/champion-stats/champion-stats.component';
import { ChampionStatsRoutingModule } from '@modules/main/pages/champion-stats/champion-stats-routing.module';
import { ChampionStatsBiz } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.biz';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    ChampionStatsComponent,
  ],
  imports: [
    ChampionStatsRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    ChampionStatsBiz
  ]
})
export class ChampionStatsModule { }
