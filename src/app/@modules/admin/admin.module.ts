import { NgModule } from '@angular/core';
import { AdminComponent } from '@modules/admin/admin.component';
import { AdminRoutingModule } from '@modules/admin/admin-routing.module';
import { GatherResourcesModule } from '@modules/admin/pages/gather-resources/gather-resources.module';
import { GatherCuisinesModule } from '@modules/admin/pages/gather-cuisines/gather-cuisines.module';
import { GatherCraftsModule } from '@modules/admin/pages/gather-crafts/gather-crafts.module';
import { NgxsModule } from '@ngxs/store';
import { AdminState } from '@modules/admin/state/admin.state';
import { GatherResourcesService } from '@modules/admin/services/gather-resources.service';
import { GatherCraftsService } from '@modules/admin/services/gather-crafts.service';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    GatherResourcesModule,
    GatherCuisinesModule,
    GatherCraftsModule,
    NgxsModule.forFeature([AdminState])
  ],
  providers: [
    GatherResourcesService,
    GatherCraftsService
  ]
})
export class AdminModule { }
