import { Type } from 'class-transformer';
import { StatModifier } from 'shared/models/lol-modifier.model';

export class ItemGoldDetail {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

export class Item {
  id: string;
  key: string;
  name: string;
  description: string;
  plaintext: string;
  into: string[];
  @Type(() => ItemGoldDetail)
  gold: ItemGoldDetail;
  tags: string[];
  @Type(() => StatModifier)
  stats: StatModifier;
}

