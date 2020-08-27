import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { GatherResourcesComponent } from '@modules/admin/pages/gather-resources/gather-resources.component';
import { GatherCraftsComponent } from '@modules/admin/pages/gather-crafts/gather-crafts.component';
import { GatherCuisinesComponent } from '@modules/admin/pages/gather-cuisines/gather-cuisines.component';
import { AdminComponent } from '@modules/admin/admin.component';
import { AdminMainComponent } from '@modules/admin/pages/admin-main/admin-main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AdminMainComponent
      },
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
    ],
    component: AdminComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }