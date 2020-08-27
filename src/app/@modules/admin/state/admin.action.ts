
import { GatherResource } from 'shared/models/gather-resources.model';
import { GatherCraft } from 'shared/models/gather-craft.model';
import { Action } from 'shared/models/action.model';
import { GatherCuisine } from 'shared/models/gather-cuisines.model';


export class StoreResourcesAction implements Action{
  static readonly type = '[admin] Store resources';
  constructor(public resources: GatherResource[]) { }
}

export class CreateResourceAction implements Action {
  static readonly type = '[admin] Create resources';
  constructor(public resource: GatherResource) { }
}

export class EditResourceAction implements Action {
  static readonly type = '[admin] Edit resources';
  constructor(public resource: GatherResource) { }
}

export class DeleteResourceAction implements Action {
  static readonly type = '[admin] Delete resources';
  constructor(public resource: GatherResource) { }
}

export class StoreCraftsAction implements Action{
  static readonly type = '[admin] Store crafts';
  constructor(public crafts: GatherCraft[]) { }
}

export class CreateCraftAction implements Action {
  static readonly type = '[admin] Create craft';
  constructor(public craft: GatherCraft) { }
}

export class EditCraftAction implements Action {
  static readonly type = '[admin] Edit craft';
  constructor(public craft: GatherCraft) { }
}

export class DeleteCraftAction implements Action {
  static readonly type = '[admin] Delete craft';
  constructor(public craft: GatherCraft) { }
}

export class StoreCuisinesAction implements Action{
  static readonly type = '[admin] Store cuisines';
  constructor(public cuisines: GatherCuisine[]) { }
}

export class CreateCuisineAction implements Action {
  static readonly type = '[admin] Create cuisine';
  constructor(public cuisine: GatherCuisine) { }
}

export class EditCuisineAction implements Action {
  static readonly type = '[admin] Edit cuisine';
  constructor(public cuisine: GatherCuisine) { }
}

export class DeleteCuisineAction implements Action {
  static readonly type = '[admin] Delete cuisine';
  constructor(public cuisine: GatherCuisine) { }
}