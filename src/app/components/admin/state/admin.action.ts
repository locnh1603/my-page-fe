import { GatherResource } from 'src/shared/models/gather-resources.model';
import { Action } from 'src/shared/models/action.model';

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