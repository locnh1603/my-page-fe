import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ChampionStatsBiz } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.biz';
import { SafeSubscription } from 'shared/models/safe-subscription.model';
import { ChampionCompact } from 'shared/models/lol-champion.model';
import { Item } from 'shared/models/lol-item.model';
import { Rune, RunesGrouped } from 'shared/models/lol-rune.model';
import { SummonerSpell } from 'shared/models/lol-summoner-spells.model';
import { combineLatest, forkJoin } from 'rxjs';
import { cloneDeep } from 'lodash';
import { RuneGroupsEnum } from 'shared/enums/runes.enum';
import { environment } from 'environments/environment';
import { State } from 'xstate';

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
  state: State<any>;

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
        (state: State<any>) => {
          this.state = cloneDeep(state);
          console.log('>>>>>>>>>>>>>>>> state-changed')
          console.log(this.state);
        }
      )
    ]
  }

  onSelectChampion(champion: ChampionCompact) {
    if (!champion) { return; }
    this.championStatsBiz.addChampion(champion);
  }

  onSelectItem(item: Item) {
    if (!item) { return; }
    this.championStatsBiz.addItemToChampion(item);
  }

  onRemoveItem(item: Item) {
    if (!item) { return; }
    this.championStatsBiz.removeItemFromChampion(item);
  }

  getChampionIconUrl(champion: ChampionCompact): string {
    const url = `${environment.ddurl_cdn}/img/champion/${champion.id}.png`;
    return url;
  }
  getItemIconUrl(item: Item): string {
    const url = `${environment.ddurl_cdn}/img/item/${item.id}.png`;
    return url;
  }
  getRunesIconUrl(rune: Rune): string {
    const url = `${environment.cdurl}${rune.iconPath}`;
    return url;
  }
  getRunesGroupIconUrl(runeGroup: RunesGrouped): string {
    let endpoint = '';
    if (runeGroup.name === 'Unknown') { return; }
    switch (runeGroup.name) {
      case RuneGroupsEnum.Domination:
        endpoint = '7200_domination';
        break;
      case RuneGroupsEnum.Resolve:
        endpoint = '7204_resolve';
        break;
      case RuneGroupsEnum.Inspirations:
        endpoint = '7203_whimsy';
        break;
      case RuneGroupsEnum.Sorcery:
        endpoint = '7202_sorcery';
        break;
      case RuneGroupsEnum.Precision:
        endpoint = '7201_precision';
        break;
    }
    const url = `${environment.cdurl}/perk-images/styles/${endpoint}.png`
    return url;
  }

  getSelectedChampionSplashArt(): string {
    if (!this.state.context.selectedChampion) {
      return;
    }
    const url = `${environment.ddurl_raw_cdn}/img/champion/splash/${this.state.context.selectedChampion.name}_0.jpg`;
    return url;
  }
  toChampionSelect() {
    this.championStatsBiz.toChampionSelect();
  }

  toRuneSelect() {
    this.championStatsBiz.toRuneSelect();
  }

  toItemSelect() {
    this.championStatsBiz.toItemSelect();
  }
}
