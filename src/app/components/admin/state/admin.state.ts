import { GatherResource } from 'src/shared/models/gather-resources.model';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { StoreResourcesAction, CreateResourceAction, EditResourceAction, DeleteResourceAction } from 'src/app/components/admin/state/admin.action';


export class AdminStateModel {
  resources: GatherResource[];
}

export const defaultState: AdminStateModel = {
  resources: []
}

@State<AdminStateModel>({name: 'admin', defaults: defaultState })
@Injectable()
export class AdminState {
  constructor() {}
  @Action(StoreResourcesAction)
  storeResourcesAction(ctx: StateContext<AdminStateModel>, action: StoreResourcesAction) {
    ctx.patchState({
      resources: action.resources
    })
  }

  @Action(CreateResourceAction)
  createResourcesAction(ctx: StateContext<AdminStateModel>, action: CreateResourceAction) {
    const resources = ctx.getState().resources;
    resources.push(action.resource);
    ctx.patchState({
      resources: [...resources]
    })
  }

  @Action(EditResourceAction)
  editResourceAction(ctx: StateContext<AdminStateModel>, action: EditResourceAction) {
    const resources = ctx.getState().resources;
    let index = resources.findIndex((res: GatherResource) => res.name === action.resource.name);
    resources[index] = action.resource;
    ctx.patchState({
      resources: [...resources]
    })
  }

  @Action(DeleteResourceAction)
  deleteResourcesAction(ctx: StateContext<AdminStateModel>, action: DeleteResourceAction) {
    const resources = ctx.getState().resources;
    let index = resources.findIndex((res: GatherResource) => res.name === action.resource.name);
    resources.splice(index, 1);
    ctx.patchState({
      resources: [...resources]
    })
  }
}