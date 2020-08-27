import { ChampionStatsDisplay } from '@modules/main/pages/champion-stats/models/champion-stats-display.model';
import { Item } from 'shared/models/lol-item.model';


export interface ChampionStatsSchema {
  states: {
    boot: {};
    loading: {};
    idle: {};
    finished: {};
    error: {}
  };
}

export interface ChampionStatContext {
  champions: ChampionStatsDisplay[];
  items: Item[]
  errors: string[];
}