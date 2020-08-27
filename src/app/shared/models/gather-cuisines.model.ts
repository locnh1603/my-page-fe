import { CraftRecipe } from 'shared/models/gather-craft.model';
import { GatheringResourceSizeEnums, GatheringResourceCategoryEnums } from 'shared/enums/pso2-lite-generic.enum';

export class GatherCuisineClassBuff {
  category: string;
  size: string;
  value: number;
}

export class GatherCuisineBuff {
  class: GatherCuisineClassBuff;
  collectRate: number;
  fishingRate: number;
}

export class GatherCuisine {
  id: string;
  name: string;
  recipe: CraftRecipe[]
  buff: GatherCuisineBuff;

  constructor() {
    this.id = '';
    this.name = '';
    this.recipe = [];
    this.buff = {
      collectRate: 0,
      fishingRate: 0,
      class: {
        size: GatheringResourceSizeEnums.Small,
        category: GatheringResourceCategoryEnums.Other,
        value: 0
      }
    }
  }
}

