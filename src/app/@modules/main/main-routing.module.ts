import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LandingComponent } from '@modules/landing/landing.component';
import { ChampionStatsComponent } from '@modules/main/pages/champion-stats/champion-stats.component';

const routes: Routes = [
  {
    path: 'champion',
    loadChildren: () => import('@modules/main/pages/champion-stats/champion-stats.module').then(m => m.ChampionStatsModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }