import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GatherCuisinesComponent } from '@modules/admin/pages/gather-cuisines/gather-cuisines.component';
import { CuisinesGridDisplayComponent } from '@modules/admin/pages/gather-cuisines/components/cuisines-grid-display/cuisines-grid-display.component';
import { AdminBiz } from '@modules/admin/biz/admin.biz';

@NgModule({
  declarations: [
    GatherCuisinesComponent,
    CuisinesGridDisplayComponent
  ],
  imports: [
    ClarityModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([CuisinesGridDisplayComponent]),
    NgSelectModule
  ],
  providers: [AdminBiz]
})
export class GatherCuisinesModule { }