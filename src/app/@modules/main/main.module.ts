import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from '@modules/main/main-routing.module';
import { ChampionStatsModule } from '@modules/main/pages/champion-stats/champion-stats.module';
@NgModule({
  declarations: [
  ],
  imports: [
    MainRoutingModule,
    ChampionStatsModule
  ]
})
export class MainModule { }
