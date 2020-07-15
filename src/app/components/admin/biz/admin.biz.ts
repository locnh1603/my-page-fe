import { Injectable } from "@angular/core";
import { GatherResourcesService } from 'src/app/components/admin/services/gather-resources.service';
import { GatherResource } from 'src/shared/models/gather-resources.model';

@Injectable()
export class AdminBiz {
  constructor(
    private resourceService: GatherResourcesService
  ) {

  }

  getAllResources() {
    return this.resourceService.getAll();
  }

  deleteResources(name: string) {
    return this.resourceService.delete(name);
  }

  createResource(newRes: GatherResource) {
    return this.resourceService.create(newRes);
  }
}