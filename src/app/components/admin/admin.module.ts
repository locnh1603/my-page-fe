import { NgModule } from '@angular/core';
import { GatherCraftsComponent } from './pages/gather-crafts/gather-crafts.component';
import { GatherCuisinesComponent } from './pages/gather-cuisines/gather-cuisines.component';
import { AdminRoutingModule } from 'src/app/components/admin/admin-routing.module';
import { GatherResourcesModule } from 'src/app/components/admin/pages/gather-resources/gather-resources.module';
import { AdminNavigatorModule } from 'src/app/components/navigator/admin-navigator.module';
import { GatherResourcesService } from 'src/app/components/admin/services/gather-resources.service';

@NgModule({
  declarations: [
    GatherCraftsComponent,
    GatherCuisinesComponent
  ],
  imports: [
    AdminRoutingModule,
    GatherResourcesModule,
    AdminNavigatorModule
  ],
  exports: [
    AdminNavigatorModule
  ],
  providers: [
    GatherResourcesService
  ]
})
export class AdminModule { }
