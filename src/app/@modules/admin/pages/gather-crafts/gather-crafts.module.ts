import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import 'ag-grid-enterprise'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CraftsGridDisplayComponent } from './components/crafts-grid-display/crafts-grid-display.component';
import { GatherCraftsComponent } from '@modules/admin/pages/gather-crafts/gather-crafts.component';
import { AdminBiz } from '@modules/admin/biz/admin.biz';

@NgModule({
  declarations: [
    GatherCraftsComponent,
    CraftsGridDisplayComponent,
  ],
  imports: [
    ClarityModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([CraftsGridDisplayComponent]),
    NgSelectModule
  ],
  providers: [AdminBiz]
})
export class GatherCraftsModule { }