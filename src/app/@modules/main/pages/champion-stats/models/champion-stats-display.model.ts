import { Champion } from 'shared/models/lol-champion.model';
import { Item } from 'shared/models/lol-item.model';
import { StatModifier } from 'shared/models/lol-modifier.model';
import { RunesGroupedDisplay } from 'shared/models/lol-rune.model';

export class ChampionStatsDisplay extends Champion {
  items: Item[];
  runes: RunesGroupedDisplay[];
  additionalModifiers: StatModifier[];
  levels: number;
  constructor() {
    super();
    this.items = [];
    this.additionalModifiers = [];
    this.levels = 0;
  }
}
