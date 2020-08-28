import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChampionStatsBiz } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.biz';
import { SafeSubscription } from 'shared/models/safe-subscription.model';
import { ChampionCompact } from 'shared/models/lol-champion.model';
import { Item } from 'shared/models/lol-item.model';
import { Rune } from 'shared/models/lol-rune.model';
import { SummonerSpell } from 'shared/models/lol-summoner-spells.model';
import { combineLatest, forkJoin } from 'rxjs';
import { cloneDeep } from 'lodash';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ChampionStats-champion-stats',
  templateUrl: './champion-stats.component.html',
  styleUrls: ['./champion-stats.component.css'],
  providers: [SafeSubscription]
})
export class ChampionStatsComponent implements OnInit, OnDestroy {

  champions: ChampionCompact[];
  items: Item[];
  runes: Rune[];
  summoners: SummonerSpell[];
  state: any;

  constructor(
    private championStatsBiz: ChampionStatsBiz,
    private safeSub: SafeSubscription
  ) { }

  ngOnInit(): void {
    this.championStatsBiz.initStateMachine();
    this.registerSubscriptions();
  }

  ngOnDestroy(): void {
    this.safeSub.unsubscribeAll();
  }

  registerSubscriptions() {
    this.safeSub.subs = [
      this.championStatsBiz.state$.subscribe(
        (state) => {
          this.state = cloneDeep(state);
          console.log(state);
        }
      )
    ]
  }

  onSelectChampion(champion: ChampionCompact) {
    this.championStatsBiz.addChampion(champion);
  }

  onSelectItem(item: Item) {
    this.championStatsBiz.addItemToChampion(item, this.state.context.selectedChampions[0].id);
  }
}
