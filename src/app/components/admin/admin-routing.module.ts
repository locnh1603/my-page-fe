import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { GatherResourcesComponent } from 'src/app/components/admin/pages/gather-resources/gather-resources.component';
import { GatherCraftsComponent } from 'src/app/components/admin/pages/gather-crafts/gather-crafts.component';
import { GatherCuisinesComponent } from 'src/app/components/admin/pages/gather-cuisines/gather-cuisines.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'resources',
        component: GatherResourcesComponent
      },
      {
        path: 'crafts',
        component: GatherCraftsComponent
      },
      {
        path: 'cuisines',
        component: GatherCuisinesComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: AdminComponent 
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }