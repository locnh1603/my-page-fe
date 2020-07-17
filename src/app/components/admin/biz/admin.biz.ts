import { Injectable } from "@angular/core";
import { GatherResourcesService } from 'src/app/components/admin/services/gather-resources.service';
import { GatherResource } from 'src/shared/models/gather-resources.model';
import { Dispatcher } from 'src/shared/services/dispatcher';
import { StoreResourcesAction, DeleteResourceAction, CreateResourceAction, EditResourceAction } from 'src/app/components/admin/state/admin.action';
import { Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { AdminSelector } from 'src/app/components/admin/state/admin.selector';

@Injectable()
export class AdminBiz {

  @Select(AdminSelector.getResources$) readonly resources$: Observable<GatherResource[]>;

  readonly deleteSuccess: Subject<any> = new Subject<any>();
  readonly createSuccess: Subject<any> = new Subject<any>();
  readonly editSuccess: Subject<any> = new Subject<any>();

  constructor(
    private resourceService: GatherResourcesService,
    private dispatcher: Dispatcher
  ) {

  }

  getAllResources() {
    this.resourceService.getAll().subscribe((res : GatherResource[]) => {
      this.dispatcher.fire(new StoreResourcesAction(res));
    });
  }

  deleteResources(name: string) {
    this.resourceService.delete(name).subscribe((res: GatherResource) => {
      this.dispatcher.fire(new DeleteResourceAction(res));
      this.deleteSuccess.next('delete');
    });
  }

  createResource(newRes: GatherResource) {
    this.resourceService.create(newRes).subscribe((res: GatherResource) => {
      this.dispatcher.fire(new CreateResourceAction(res));
      this.createSuccess.next('create');
    });
  }

  updateResource(newRes: GatherResource) {
    this.resourceService.edit(newRes.name, newRes).subscribe((res: GatherResource) => {
      this.dispatcher.fire(new EditResourceAction(res));
      this.editSuccess.next('create');
    });
  }
}