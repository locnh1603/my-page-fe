import { GatheringResourceTypeEnums, GatheringResourceSizeEnums, GatheringResourceCategoryEnums } from 'src/shared/enums/gather-resources.enum';

export class GatherResource                                                                                                                                                                                                                                                                                                        
{
  name: string;
  region: string[];
  location: string[];
  class: GatherResourceClass;
  rarity: number;
  type: GatheringResourceTypeEnums

  constructor() {
    this.name = '';
    this.location = [];
    this.region = [];
    this.rarity = 0;
    this.type = GatheringResourceTypeEnums.Mining;
  }
}

export class GatherResourceClass {
  category: GatheringResourceCategoryEnums;
  size: GatheringResourceSizeEnums
}