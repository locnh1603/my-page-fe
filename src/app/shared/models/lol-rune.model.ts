import { RuneGroupsEnum, RuneTypesEnum } from 'shared/enums/runes.enum';

export class Rune {
  id: string;
  name: string;
  type: RuneTypesEnum;
  group: RuneGroupsEnum;
  tooltip: string;
  longDesc: string;
  shortDesc: string;
  icon: string;

  constructor() {
    this.icon = '';
    this.id = '';
    this.name = '';
    this.tooltip = '';
    this.shortDesc = '';
    this.longDesc = '';
  }
}

export class RunesGrouped {
  name: RuneGroupsEnum;
  runes: Rune[];
}