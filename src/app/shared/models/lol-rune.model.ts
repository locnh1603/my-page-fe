import { RuneTypesEnum, MajorRunesEnum, SorceryRunesEnum, ResolveRunesEnum, PrecisionRunesEnum, InspirationRunesEnum, DominationRunesEnum, RuneGroupsEnum, RunePageFirstRowEnum, RunePageSecondRowEnum, RunePageThirdRowEnum } from 'shared/enums/runes.enum';
import { cloneDeep } from 'lodash';

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
    if ((<any>Object).values(MajorRunesEnum).includes(rune.name)) {
      type = RuneTypesEnum.Major;
    } else {
      type = RuneTypesEnum.Minor;
    }
    if ((<any>Object).values(SorceryRunesEnum).includes(rune.name)) {
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
      iconPath: rune.iconPath.toLowerCase().replace('/lol-game-data/assets/v1', ''),
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

export class RunesGroupedDisplay extends RunesGrouped {
  selectedRunes: Rune[];
  constructor(name: RuneGroupsEnum) {
    super(name);
  }

  getFirstRow() {
    if (!this.name || this.runes.length === 0 || this.name === 'Unknown') { return; }
    const runeNames = RunePageFirstRowEnum[this.name].split('-');
    return runeNames.map(n => this.runes.find(r => r.name === n));
  }

  getSecondRow() {
    if (!this.name || this.runes.length === 0 || this.name === 'Unknown') { return; }
    const runeNames = RunePageSecondRowEnum[this.name].split('-');
    return runeNames.map(n => this.runes.find(r => r.name === n));
  }

  getThirdRow() {
    if (!this.name || this.runes.length === 0 || this.name === 'Unknown') { return; }
    const runeNames = RunePageThirdRowEnum[this.name].split('-');
    return runeNames.map(n => this.runes.find(r => r.name === n));
  }

  addRune(rune: Rune, row: number) {
    let RowRunes;
    let RowRunesExisted;
    switch (row) {
      case 0:
        const majorRunes = this.selectedRunes.filter(r => r.type === 'major');
        majorRunes.forEach(r => {
          const index = this.selectedRunes.findIndex(rune => rune === r);
          this.selectedRunes.splice(index, 1);
        })
        this.selectedRunes.push(rune);
        break;
      case 1:
        RowRunes = this.getFirstRow();
        RowRunesExisted = this.selectedRunes.filter(r => RowRunes.includes(r));
        RowRunesExisted.forEach(r => {
          const index = this.selectedRunes.findIndex(rune => rune === r);
          this.selectedRunes.splice(index, 1);
        })
        this.selectedRunes.push(rune);
        break;
      case 2:
        RowRunes = this.getSecondRow();
        RowRunesExisted = this.selectedRunes.filter(r => RowRunes.includes(r));
        RowRunesExisted.forEach(r => {
          const index = this.selectedRunes.findIndex(rune => rune === r);
          this.selectedRunes.splice(index, 1);
        })
        this.selectedRunes.push(rune);
        break;
      case 3:
        RowRunes = this.getThirdRow();
        RowRunesExisted = this.selectedRunes.filter(r => RowRunes.includes(r));
        RowRunesExisted.forEach(r => {
          const index = this.selectedRunes.findIndex(rune => rune === r);
          this.selectedRunes.splice(index, 1);
        })
        this.selectedRunes.push(rune);
        break;
    }
  }
}