import { ChampionStatsMachineEventsEnum } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.enum';
import { Champion, ChampionCompact } from 'shared/models/lol-champion.model';
import { Item } from 'shared/models/lol-item.model';
import { ChampionStatsDisplay } from '@modules/main/pages/champion-stats/models/champion-stats-display.model';
import { StatModifier } from 'shared/models/lol-modifier.model';
import { EventObject } from 'xstate';
import { RunesGrouped } from 'shared/models/lol-rune.model';


export class Init implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.Init;
  constructor(public champions: Champion[], public items: Item[]) { }
}

export class FetchInitSuccess implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.Success;
  constructor(public payload: {
    items: Item[],
    champions: ChampionCompact[],
    runes: RunesGrouped[]
  }) { }
}

export class FetchChampionStatSuccess implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.Success;
  constructor(public champion: ChampionStatsDisplay) { }
}

export class AddChampion implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.AddChampion;
  constructor(public champion: ChampionStatsDisplay) { }
}

export class AddItemToChampion implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.AddItemToChampion;
  constructor(public item: Item) { }
}

export class RemoveItemFromChampion implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.RemoveItemFromChampion;
  constructor(public item: Item) { }
}

export class AddModifierToChampion implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.AddModifierToChampion;
  constructor(public modifier: StatModifier, public championId: string) { }
}

export class RemoveModifierFromChampion implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.RemoveModifierFromChampion;
  constructor(public modifier: StatModifier, public championId: string) { }
}

export class ChangeChampionLevel implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ChangeChampionLevel;
  constructor(public level: number, public championId: string) { }
}

export class Finish implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.Finish;
  constructor() { }
}

export class ToChampionSelect implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ToChampionSelect;
  constructor() { }
}


export class ToRuneSelect implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ToRuneSelect;
  constructor() { }
}


export class ToItemSelect implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ToItemSelect;
  constructor() { }
}

export class ToRunePagePrecision implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ToRunePagePrecision;
  constructor() { }
}

export class ToRunePageSorcery implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ToRunePageSorcery;
  constructor() { }
}

export class ToRunePageResolve implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ToRunePageResolve;
  constructor() { }
}

export class ToRunePageDomination implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ToRunePageDomination;
  constructor() { }
}

export class ToRunePageInspiration implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ToRunePageInspiration;
  constructor() { }
}

export class Fail implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.Fail;
  constructor(public error: any) { }
}

export type ChampionStatsEvent = AddChampion | ToChampionSelect | RemoveItemFromChampion | FetchInitSuccess | ToItemSelect | ToRuneSelect
  | AddItemToChampion | AddModifierToChampion | RemoveModifierFromChampion | ChangeChampionLevel | FetchChampionStatSuccess | Init | Finish | Fail
  | ToRunePageInspiration | ToRunePageDomination | ToRunePageResolve | ToRunePageSorcery | ToRunePagePrecision;
export interface Errors {
  [key: string]: string;
}
