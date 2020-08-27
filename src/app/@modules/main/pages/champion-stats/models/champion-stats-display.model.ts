import { Champion } from 'shared/models/lol-champion.model';

export class ChampionStatsDisplay extends Champion {
  items = [];
  additionalModifier = [];
  levels = [];
  constructor() {
    super();
  }
}
