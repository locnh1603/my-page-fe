import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { GatherResourcesComponent } from 'src/app/components/admin/pages/gather-resources/gather-resources.component';
import { GatherCuisinesComponent } from 'src/app/components/admin/pages/gather-cuisines/gather-cuisines.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }