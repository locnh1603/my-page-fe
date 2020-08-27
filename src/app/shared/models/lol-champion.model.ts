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

export class Champion {
  stats: ChampionStats
  id: string;
  title: string;
  constructor() {
    this.stats = new ChampionStats();
  }
}