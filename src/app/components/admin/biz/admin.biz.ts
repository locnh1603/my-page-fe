import { Injectable } from "@angular/core";
import { GatherResourcesService } from 'src/app/components/admin/services/gather-resources.service';
import { GatherResource } from 'src/shared/models/gather-resources.model';
import { Dispatcher } from 'src/shared/services/dispatcher';
import { StoreResourcesAction, DeleteResourceAction, CreateResourceAction, EditResourceAction, StoreCraftsAction, DeleteCraftAction, CreateCraftAction, EditCraftAction } from 'src/app/components/admin/state/admin.action';
import { Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { AdminSelector } from 'src/app/components/admin/state/admin.selector';
import { GatherCraftsService } from 'src/app/components/admin/services/gather-crafts.service';
import { GatherCraft } from 'src/shared/models/gather-craft.model';

@Injectable()
export class AdminBiz {

  @Select(AdminSelector.getResources$) readonly resources$: Observable<GatherResource[]>;
  @Select(AdminSelector.getCrafts$) readonly crafts$: Observable<GatherCraft[]>;

  readonly deleteSuccess: Subject<any> = new Subject<any>();
  readonly createSuccess: Subject<any> = new Subject<any>();
  readonly editSuccess: Subject<any> = new Subject<any>();

  constructor(
    private resourceService: GatherResourcesService,
    private craftService: GatherCraftsService,
    private dispatcher: Dispatcher
  ) {

  }

  getAll() {
    this.getAllCrafts();
    this.getAllResources();
  }

  getAllResources() {
    this.resourceService.getAll().subscribe((res : GatherResource[]) => {
      this.dispatcher.fire(new StoreResourcesAction(res));
    });
  }

  deleteResources(id: string) {
    this.resourceService.delete(id).subscribe((res: GatherResource) => {
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
    this.resourceService.edit(newRes.id, newRes).subscribe((res: GatherResource) => {
      this.dispatcher.fire(new EditResourceAction(res));
      this.editSuccess.next('edit');
    });
  }

  getAllCrafts() {
    this.craftService.getAll().subscribe((res : GatherCraft[]) => {
      this.dispatcher.fire(new StoreCraftsAction(res));
    });
  }

  deleteCraft(id: string) {
    this.craftService.delete(id).subscribe((res: GatherCraft) => {
      this.dispatcher.fire(new DeleteCraftAction(res));
      this.deleteSuccess.next('delete');
    });
  }

  createCraft(entity: GatherCraft) {
    this.craftService.create(entity).subscribe((res: GatherCraft) => {
      this.dispatcher.fire(new CreateCraftAction(res));
      this.createSuccess.next('create');
    });
  }

  updateCraft(entity: GatherCraft) {
    this.craftService.edit(entity.id, entity).subscribe((res: GatherCraft) => {
      this.dispatcher.fire(new EditCraftAction(res));
      this.editSuccess.next('edit');
    });
  }
}