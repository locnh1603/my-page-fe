import { GatherResource } from 'src/shared/models/gather-resources.model';
import { Action } from 'src/shared/models/action.model';
import { GatherCraft } from 'src/shared/models/gather-craft.model';

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