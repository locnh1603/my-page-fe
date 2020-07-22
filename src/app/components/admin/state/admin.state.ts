import { GatherResource } from 'src/shared/models/gather-resources.model';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { StoreResourcesAction, CreateResourceAction, EditResourceAction, DeleteResourceAction, StoreCraftsAction, CreateCraftAction, EditCraftAction, DeleteCraftAction } from 'src/app/components/admin/state/admin.action';
import { GatherCraft } from 'src/shared/models/gather-craft.model';


export class AdminStateModel {
  resources: GatherResource[];
  crafts: GatherCraft[];
}

export const defaultState: AdminStateModel = {
  resources: [],
  crafts: []
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

  @Action(StoreCraftsAction)
  storeCraftsAction(ctx: StateContext<AdminStateModel>, action: StoreCraftsAction) {
    ctx.patchState({
      crafts: action.crafts
    })
  }

  @Action(CreateCraftAction)
  createCraftAction(ctx: StateContext<AdminStateModel>, action: CreateCraftAction) {
    const crafts = ctx.getState().crafts;
    crafts.push(action.craft);
    ctx.patchState({
      crafts: [...crafts]
    })
  }

  @Action(EditCraftAction)
  editCraftAction(ctx: StateContext<AdminStateModel>, action: EditCraftAction) {
    const crafts = ctx.getState().crafts;
    let index = crafts.findIndex((res: GatherCraft) => res.id === action.craft.id);
    crafts[index] = action.craft;
    ctx.patchState({
      crafts: [...crafts]
    })
  }

  @Action(DeleteCraftAction)
  deleteCraftAction(ctx: StateContext<AdminStateModel>, action: DeleteCraftAction) {
    const crafts = ctx.getState().crafts;
    let index = crafts.findIndex((res: GatherCraft) => res.name === action.craft.name);
    crafts.splice(index, 1);
    ctx.patchState({
      crafts: [...crafts]
    })
  }
}