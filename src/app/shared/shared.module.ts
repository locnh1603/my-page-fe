import { NgModule } from '@angular/core';
import { ChampionService } from 'shared/services/lol-champion.service';
import { ItemService } from 'shared/services/lol-item.service';
import { RuneService } from 'shared/services/lol-runes.service';
import { SummonerSpellService } from 'shared/services/lol-summonerspell.service';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ChampionService,
    ItemService,
    RuneService,
    SummonerSpellService
  ],
})
export class SharedModule { }
