import { ChampionStatsDisplay } from '@modules/main/pages/champion-stats/models/champion-stats-display.model';
import { Item } from 'shared/models/lol-item.model';
import { ChampionCompact } from 'shared/models/lol-champion.model';


export interface ChampionStatsSchema {
  states: {
    boot: {};
    loading: {};
    idle: {};
    championDetail: {};
    finished: {};
    error: {}
  };
}

export interface ChampionStatContext {
  champions: ChampionCompact[];
  selectedChampion: ChampionStatsDisplay;
  items: Item[];
  errors: string[];
}
