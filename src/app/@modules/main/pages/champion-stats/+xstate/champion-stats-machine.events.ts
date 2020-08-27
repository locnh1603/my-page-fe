import { ChampionStatsMachineEventsEnum } from '@modules/main/pages/champion-stats/+xstate/champion-stats-machine.enum';
import { Champion } from 'shared/models/lol-champion.model';
import { Item } from 'shared/models/lol-item.model';
import { Modifier } from 'shared/models/lol-modifier.model';
import { ChampionStatsDisplay } from '@modules/main/pages/champion-stats/models/champion-stats-display.model';

export class FetchChampionList {
  readonly type = ChampionStatsMachineEventsEnum.FetchChampionList;
  constructor(public champions: Champion[]) {}
}

export class Init {
  readonly type = ChampionStatsMachineEventsEnum.Init;
  constructor(public champions: Champion[], items: Item[]) {}
}

export class FetchChampionListSuccess {
  readonly type = ChampionStatsMachineEventsEnum.Success;
  constructor(public champions: Champion[]) {}
}

export class FetchItemList {
  readonly type = ChampionStatsMachineEventsEnum.FetchItemList;
  constructor(public items: Item[]) {}
}

export class FetchItemListSuccess {
  readonly type = ChampionStatsMachineEventsEnum.Success;
  constructor(public items: Item[]) {}
}

export class FetchChampionStat {
  readonly type = ChampionStatsMachineEventsEnum.FetchChampionStat;
  constructor(public champion: Champion) {}
}

export class FetchChampionStatSuccess {
  readonly type = ChampionStatsMachineEventsEnum.Success;
  constructor(public champion: ChampionStatsDisplay) {}
}

export class AddChampion {
  readonly type = ChampionStatsMachineEventsEnum.AddChampion;
  constructor(public champion: Champion) {}
}

export class RemoveChampion {
  readonly type = ChampionStatsMachineEventsEnum.RemoveChampion;
  constructor(public championId: string) {}
}

export class AddItemToChampion {
  readonly type = ChampionStatsMachineEventsEnum.AddItemToChampion;
  constructor(public itemId: string, public championId: string) {}
}

export class RemoveItemFromChampion {
  readonly type = ChampionStatsMachineEventsEnum.RemoveItemFromChampion;
  constructor(public itemId: string, public championId: string) {}
}

export class AddModifierToChampion {
  readonly type = ChampionStatsMachineEventsEnum.AddModifierToChampion;
  constructor(public modifier: Modifier, public championId: string) {}
}

export class RemoveModifierFromChampion {
  readonly type = ChampionStatsMachineEventsEnum.RemoveModifierFromChampion;
  constructor(public modifier: Modifier, public championId: string) {}
}

export class ChangeChampionLevel {
  readonly type = ChampionStatsMachineEventsEnum.ChangeChampionLevel;
  constructor(public level: number, public championId: string) {}
}

export type ChampionStatsEvent = FetchChampionList | FetchItemList | AddChampion | RemoveChampion | RemoveItemFromChampion | AddItemToChampion
| AddModifierToChampion | RemoveModifierFromChampion | ChangeChampionLevel | FetchChampionListSuccess | FetchItemListSuccess
| FetchChampionStatSuccess | Init

export interface Errors {
  [key: string]: string;
}
