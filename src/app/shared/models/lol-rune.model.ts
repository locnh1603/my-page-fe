import { RuneGroupsEnum, RuneTypesEnum, MajorRunesEnum, SorceryRunesEnum, ResolveRunesEnum, PrecisionRunesEnum, InspirationRunesEnum, DominationRunesEnum } from 'shared/enums/runes.enum';

export class Rune {
  id: string;
  name: string;
  type: RuneTypesEnum;
  group: RuneGroupsEnum;
  tooltip: string;
  longDesc: string;
  shortDesc: string;
  iconPath: string;

  constructor() {
    this.iconPath = '';
    this.id = '';
    this.name = '';
    this.tooltip = '';
    this.shortDesc = '';
    this.longDesc = '';
  }

  static parseRune(rune: Rune): Rune {
    let type;
    let group;
    if((<any>Object).values(MajorRunesEnum).includes(rune.name)) {
      type = RuneTypesEnum.Major;
    } else {
      type = RuneTypesEnum.Minor;
    }
    if((<any>Object).values(SorceryRunesEnum).includes(rune.name)) {
      group = RuneGroupsEnum.Sorcery;
    } else if ((<any>Object).values(ResolveRunesEnum).includes(rune.name)) {
      group = RuneGroupsEnum.Resolve;
    } else if ((<any>Object).values(PrecisionRunesEnum).includes(rune.name)) {
      group = RuneGroupsEnum.Precision;
    } else if ((<any>Object).values(InspirationRunesEnum).includes(rune.name)) {
      group = RuneGroupsEnum.Inspirations;
    } else if ((<any>Object).values(DominationRunesEnum).includes(rune.name)) {
      group = RuneGroupsEnum.Domination;
    } else {
      group = RuneGroupsEnum.Unknown;
    }
    return {
      ...rune,
      type,
      group,
      iconPath: rune.iconPath.toLowerCase().replace('/lol-game-data/assets/v1',''),
    } as Rune;
  }
}

export class RunesGrouped {
  name: RuneGroupsEnum;
  runes: Rune[];
  constructor(name: RuneGroupsEnum) {
    this.name = name;
    this.runes = [];
  }
}