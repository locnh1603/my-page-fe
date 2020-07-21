import { NgModule } from '@angular/core';
import { GatherCraftsComponent } from './pages/gather-crafts/gather-crafts.component';
import { GatherCuisinesComponent } from './pages/gather-cuisines/gather-cuisines.component';
import { AdminRoutingModule } from 'src/app/components/admin/admin-routing.module';
import { GatherResourcesModule } from 'src/app/components/admin/pages/gather-resources/gather-resources.module';
import { GatherResourcesService } from 'src/app/components/admin/services/gather-resources.service';
import { NgxsModule } from '@ngxs/store';
import { AdminState } from 'src/app/components/admin/state/admin.state';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { GatherCuisinesModule } from 'src/app/components/admin/pages/gather-cuisines/gather-cuisines.module';
import { GatherCraftsModule } from 'src/app/components/admin/pages/gather-crafts/gather-crafts.module';

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
    GatherResourcesService
  ]
})
export class AdminModule { }
