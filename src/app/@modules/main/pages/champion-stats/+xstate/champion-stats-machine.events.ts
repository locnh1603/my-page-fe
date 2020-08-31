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

export class SelectItem implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.SelectItem;
  constructor() { }
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

export class ReselectChampion implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.ReselectChampion;
  constructor() { }
}

export class Fail implements EventObject {
  readonly type = ChampionStatsMachineEventsEnum.Fail;
  constructor(public error: any) { }
}

export type ChampionStatsEvent = AddChampion | ReselectChampion | RemoveItemFromChampion | FetchInitSuccess | SelectItem
  | AddItemToChampion | AddModifierToChampion | RemoveModifierFromChampion | ChangeChampionLevel | FetchChampionStatSuccess | Init | Finish | Fail;

export interface Errors {
  [key: string]: string;
}
