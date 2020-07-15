import { NgModule } from '@angular/core';
import { AdminNavigatorComponent } from 'src/app/components/navigator/admin-navigator.component';

@NgModule({
  declarations: [
    AdminNavigatorComponent
  ],
  exports: [
    AdminNavigatorComponent
  ]
})
export class AdminNavigatorModule { }