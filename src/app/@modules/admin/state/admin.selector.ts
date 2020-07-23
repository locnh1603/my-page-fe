import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { AdminState, AdminStateModel } from '@modules/admin/state/admin.state';
import { GatherResource } from 'shared/models/gather-resources.model';
import { GatherCraft } from 'shared/models/gather-craft.model';

@Injectable()
export class AdminSelector {
  @Selector([AdminState])
  static getResources$(state: AdminStateModel): GatherResource[] {
    return state.resources;
  }

  @Selector([AdminState])
  static getCrafts$(state: AdminStateModel): GatherCraft[] {
    return state.crafts;
  }
}
