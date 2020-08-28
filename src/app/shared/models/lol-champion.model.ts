import { Type } from 'class-transformer'

export class ChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;

  constructor() {
    this.hp = 0;
    this.hpperlevel = 0;
    this.hpregenperlevel = 0;
    this.hpregen = 0;
    this.mp = 0;
    this.mpperlevel = 0;
    this.mpregen = 0;
    this.mpregenperlevel = 0;
    this.movespeed = 0;
    this.armor = 0;
    this.armorperlevel = 0;
    this.spellblock = 0;
    this.spellblockperlevel = 0;
    this.attackrange = 0;
    this.crit = 0;
    this.critperlevel = 0;
    this.attackdamage = 0;
    this.attackdamageperlevel = 0;
    this.attackspeedperlevel = 0;
    this.attackspeed = 0;
  }
}

export class ChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;

  constructor() {
    this.attack = 0;
    this.defense = 0;
    this.difficulty = 0;
    this.magic = 0;
  }
}

export class ChampionSpell { }
export class ChampionCompact {
  @Type(() => ChampionStats)
  stats: ChampionStats;
  id: string;
  key: string;
  title: string;
  @Type(() => ChampionInfo)
  info: ChampionInfo;
  tags: string[];
  constructor() {
    this.stats = new ChampionStats();
    this.info = new ChampionInfo();
    this.id = '';
    this.key = '';
    this.title = '';
    this.tags = [];
  }
}
export class Champion extends ChampionCompact {
  spells: ChampionSpell[];
  constructor() {
    super();
    this.spells = [];
  }
}


