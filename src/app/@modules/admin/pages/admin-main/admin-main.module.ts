import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminBiz } from '@modules/admin/biz/admin.biz';
import { AdminMainComponent } from '@modules/admin/pages/admin-main/admin-main.component';

@NgModule({
  declarations: [
    AdminMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [AdminBiz]
})
export class AdminMainModule { }