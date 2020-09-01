import { Injectable } from '@angular/core';
import { from, forkJoin } from 'rxjs';
import { MachineOptions, Machine, interpret, assign } from 'xstate';
import { ChampionStatsEvent, FetchInitSuccess, ToChampionSelect, AddChampion, AddItemToChampion, RemoveItemFromChampion, ToItemSelect, ToRuneSelect } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.events';
import { ChampionStatContext, ChampionStatsSchema } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.schema';
import { ChampionStatMachineConfig } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.config';
import { map } from 'rxjs/operators';
import { ChampionService } from 'shared/services/lol-champion.service';
import { ItemService } from 'shared/services/lol-item.service';
import { RuneService } from 'shared/services/lol-runes.service';
import { ChampionCompact } from 'shared/models/lol-champion.model';
import { Item } from 'shared/models/lol-item.model';
import { ChampionStatsDisplay } from '@modules/main/pages/champion-stats/models/champion-stats-display.model';
import { cloneDeep } from 'lodash';

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
        init: assign<any, ChampionStatsEvent>((_, event: FetchInitSuccess) => {
          return {
            champions: [...event.payload.champions],
            items: [...event.payload.items],
            runes: [...event.payload.runes]
          }
        }),
        addChampion: assign<any, ChampionStatsEvent>((_, event: AddChampion) => {
          return {
            selectedChampion: cloneDeep(event.champion)
          }
        }),
        addItemToChampion: assign<any, ChampionStatsEvent>((_, event: AddItemToChampion) => {
          const selectedChampion: ChampionStatsDisplay = _.selectedChampion;
          if (!selectedChampion.items) {
            selectedChampion.items = [];
          }
          selectedChampion.items.push(event.item);
          return {
            selectedChampion: cloneDeep(selectedChampion)
          }
        })
      },
      services: {
        fetch: () =>
          forkJoin([
            this.championService.fetchChampionList().pipe(),
            this.itemService.fetchItemList().pipe(),
            this.runeService.fetchRuneList().pipe()
          ]).pipe(map(
            ([champions, items, runes]) => {
              return new FetchInitSuccess({
                champions,
                items,
                runes
              })
            }
          ))
      },
      guards: {
        selectedChampion: (context) => {
          return !!context.selectedChampion;
        }
      }
    };
  constructor(
    private championService: ChampionService,
    private itemService: ItemService,
    private runeService: RuneService
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

  toChampionSelect() {
    this.transition(new ToChampionSelect());
  }

  toItemSelect() {
    this.transition(new ToItemSelect());
  }

  toRuneSelect() {
    this.transition(new ToRuneSelect());
  }

  addItemToChampion(item: Item) {
    this.transition(new AddItemToChampion(item));
  }

  removeItemFromChampion(item: Item) {
    this.transition(new RemoveItemFromChampion(item));
  }

  get state$() {
    return from(this.service);
  }
}
