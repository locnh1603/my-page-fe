import { Injectable } from '@angular/core';
import { from, forkJoin, Observable } from 'rxjs';
import { MachineOptions, AnyEventObject, Machine, interpret, assign } from 'xstate';
import { ChampionStatsEvent, FetchInitSuccess, AddChampion, AddItemToChampion } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.events';
import { ChampionStatContext, ChampionStatsSchema } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.schema';
import { ChampionStatMachineConfig } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.config';
import { map } from 'rxjs/operators';
import { ChampionService } from 'shared/services/lol-champion.service';
import { ItemService } from 'shared/services/lol-item.service';
import { RuneService } from 'shared/services/lol-runes.service';
import { SummonerSpellService } from 'shared/services/lol-summonerspell.service';
import { Select } from '@ngxs/store';
import { ChampionCompact } from 'shared/models/lol-champion.model';
import { Item } from 'shared/models/lol-item.model';
import { Rune } from 'shared/models/lol-rune.model';
import { SummonerSpell } from 'shared/models/lol-summoner-spells.model';
import { Dispatcher } from '@core/services/dispatcher';
import { ChampionStatsDisplay } from '@modules/main/pages/champion-stats/models/champion-stats-display.model';

@Injectable()
export class ChampionStatsBiz {
  cnt = 1;
  private service;
  private machine;
  private championStatStateMachineOptions:
    Partial<MachineOptions<
      ChampionStatContext,
      ChampionStatsEvent
    >> = {
      actions: {
        logMessage: (_, event: AnyEventObject) => {
          console.log('>>>>>>>>>>> eventMsg: ' + event.message);
        },
        init: assign<any, ChampionStatsEvent>((_, event: FetchInitSuccess) => {
          return {
            champions: [...event.payload.champions],
            items: [...event.payload.items],
            runes: [...event.payload.runes],
            summoners: [...event.payload.summoners]
          }
        }),
        addChampion: assign<any, ChampionStatsEvent>((_, event: AddChampion) => {
          const selectedChampions = [..._.selectedChampions];
          selectedChampions.push(event.champion);
          return {
            selectedChampions
          }
        }),
        addItemToChampion: assign<any, ChampionStatsEvent>((_, event: AddItemToChampion) => {
          const selectedChampions: ChampionStatsDisplay[] = [..._.selectedChampions];
          const targetChampion = selectedChampions.find(c => c.id === event.championId);
          if(!targetChampion.items) {
            targetChampion.items = [];
          }
          targetChampion.items.push(event.item);
          return {
            selectedChampions
          }
        })
      },
      services: {
        fetch: () =>
          forkJoin([
            this.championService.fetchChampionList().pipe(),
            this.itemService.fetchItemList().pipe(),
            this.runeService.fetchRuneList().pipe(),
            this.summonerSpellService.fetchSummonerList().pipe()
          ]).pipe(map(
            ([champions, items, runes, summoners]) => {
              return new FetchInitSuccess({
                champions,
                items,
                runes,
                summoners
              })
            }
          ))
      }
    };
  constructor(
    private championService: ChampionService,
    private itemService: ItemService,
    private runeService: RuneService,
    private summonerSpellService: SummonerSpellService
  ) {

  }

  initStateMachine(): void {
    this.machine = Machine<any, ChampionStatsSchema, ChampionStatsEvent>(
      ChampionStatMachineConfig
    ).withConfig(this.championStatStateMachineOptions);
    this.service = interpret(this.machine).start();
  }

  stopMachine(): void {
    this.service.stop();
  }

  transition(event: ChampionStatsEvent) {
    this.service.send(event);
  }

  addChampion(champion: ChampionCompact) {
    this.championService.fetchChampionDetail(champion.id).subscribe((res: ChampionStatsDisplay) => {
      this.transition(new AddChampion(res));
    })
  }

  addItemToChampion(item: Item, championId: string) {
    this.transition(new AddItemToChampion(item, championId));
  }

  get state$() {
    return from(this.service);
  }
}
