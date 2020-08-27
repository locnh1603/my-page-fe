import { Injectable } from "@angular/core";
import { Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { AdminSelector } from '@modules/admin/state/admin.selector';
import { GatherResource } from 'shared/models/gather-resources.model';
import { GatherCraft } from 'shared/models/gather-craft.model';
import { GatherResourcesService } from '@modules/admin/services/gather-resources.service';
import { GatherCraftsService } from '@modules/admin/services/gather-crafts.service';
import { Dispatcher } from 'shared/services/dispatcher';
import { StoreResourcesAction, DeleteResourceAction, CreateResourceAction, EditResourceAction, StoreCraftsAction, DeleteCraftAction, CreateCraftAction, EditCraftAction, StoreCuisinesAction, DeleteCuisineAction, CreateCuisineAction, EditCuisineAction } from '@modules/admin/state/admin.action';
import { GatherCuisineService } from '@modules/admin/services/gather-cuisines.service';
import { GatherCuisine } from 'shared/models/gather-cuisines.model';

@Injectable()
export class AdminBiz {

  @Select(AdminSelector.getResources$) readonly resources$: Observable<GatherResource[]>;
  @Select(AdminSelector.getCrafts$) readonly crafts$: Observable<GatherCraft[]>;
  @Select(AdminSelector.getCuisines$) readonly cuisines$: Observable<GatherCuisine[]>;

  readonly deleteSuccess: Subject<any> = new Subject<any>();
  readonly createSuccess: Subject<any> = new Subject<any>();
  readonly editSuccess: Subject<any> = new Subject<any>();

  constructor(
    private resourceService: GatherResourcesService,
    private craftService: GatherCraftsService,
    private cuisineService: GatherCuisineService,
    private dispatcher: Dispatcher
  ) {

  }

  getAll() {
    this.getAllCrafts();
    this.getAllResources();
    this.getAllCuisines();
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

  getAllCuisines() {
    this.cuisineService.getAll().subscribe((res : GatherCuisine[]) => {
      this.dispatcher.fire(new StoreCuisinesAction(res));
    });
  }

  deleteCuisine(id: string) {
    this.cuisineService.delete(id).subscribe((res: GatherCuisine) => {
      this.dispatcher.fire(new DeleteCuisineAction(res));
      this.deleteSuccess.next('delete');
    });
  }

  createCuisine(entity: GatherCuisine) {
    this.cuisineService.create(entity).subscribe((res: GatherCuisine) => {
      this.dispatcher.fire(new CreateCuisineAction(res));
      this.createSuccess.next('create');
    });
  }

  updateCuisine(entity: GatherCuisine) {
    this.cuisineService.edit(entity.id, entity).subscribe((res: GatherCuisine) => {
      this.dispatcher.fire(new EditCuisineAction(res));
      this.editSuccess.next('edit');
    });
  }
}