import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('@modules/admin/admin.module').then(m => m.AdminModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }