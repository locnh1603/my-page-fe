import { ChampionStatsDisplay } from '@modules/main/pages/champion-stats/models/champion-stats-display.model';
import { Item } from 'shared/models/lol-item.model';
import { ChampionCompact } from 'shared/models/lol-champion.model';
import { RunesGrouped } from 'shared/models/lol-rune.model';


export interface ChampionStatsSchema {
  states: {
    boot: {};
    loading: {};
    championSelect: {};
    itemSelect: {};
    runeSelect: {};
    finished: {};
    error: {}
  };
}

export interface ChampionStatContext {
  champions: ChampionCompact[];
  selectedChampion: ChampionStatsDisplay;
  items: Item[];
  errors: string[];
  runes: RunesGrouped[];
}
