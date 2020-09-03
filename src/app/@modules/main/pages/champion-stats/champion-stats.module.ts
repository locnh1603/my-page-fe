import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChampionStatsComponent } from '@modules/main/pages/champion-stats/champion-stats.component';
import { ChampionStatsRoutingModule } from '@modules/main/pages/champion-stats/champion-stats-routing.module';
import { ChampionStatsBiz } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.biz';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChampionStatsDetailsComponent } from './components/champion-stats-details/champion-stats-details.component';
@NgModule({
  declarations: [
    ChampionStatsComponent,
    ChampionStatsDetailsComponent,
  ],
  imports: [
    ChampionStatsRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ProgressSpinnerModule
  ],
  providers: [
    ChampionStatsBiz
  ]
})
export class ChampionStatsModule { }
