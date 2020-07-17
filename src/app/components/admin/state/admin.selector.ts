import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { AdminState, AdminStateModel } from 'src/app/components/admin/state/admin.state';
import { GatherResource } from 'src/shared/models/gather-resources.model';

@Injectable()
export class AdminSelector {
  @Selector([AdminState])
  static getResources$(state: AdminStateModel): GatherResource[] {
    return state.resources;
  }
}
