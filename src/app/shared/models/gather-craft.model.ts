import { PSO2ClassEnums, GatherCraftTypeEnums } from 'shared/enums/pso2-lite-generic.enum';


export class SimpleRecipe {
  resourceId: string;
  resourceName: string;
}

export class CraftRecipe {
  resourceId: string;
  resourceName: string;
  amount: number;
}

export class GatherCraft {
  id: string;
  name: string;
  class: PSO2ClassEnums;
  type: GatherCraftTypeEnums;
  recipe: CraftRecipe[];
  constructor() {
    this.name ='';
    this.id = '';
    this.class = PSO2ClassEnums.summoner;
    this.type = GatherCraftTypeEnums.lring;
    this.recipe = [];
  }
}