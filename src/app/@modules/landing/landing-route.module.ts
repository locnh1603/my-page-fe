import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LandingComponent } from '@modules/landing/landing.component';

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