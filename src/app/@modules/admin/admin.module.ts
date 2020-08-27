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
import { GatherCuisineService } from '@modules/admin/services/gather-cuisines.service';
import { ClarityModule } from '@clr/angular';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminMainModule } from '@modules/admin/pages/admin-main/admin-main.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    AdminMainModule,
    GatherResourcesModule,
    GatherCuisinesModule,
    GatherCraftsModule,
    NgxsModule.forFeature([AdminState]),
    ClarityModule
  ],
  providers: [
    GatherResourcesService,
    GatherCraftsService,
    GatherCuisineService
  ]
})
export class AdminModule { }
