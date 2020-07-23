import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import 'ag-grid-enterprise'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GatherResourcesComponent } from '@modules/admin/pages/gather-resources/gather-resources.component';
import { ResourcesGridDisplayComponent } from '@modules/admin/pages/gather-resources/components/resources-grid-display/resources-grid-display.component';
import { AdminBiz } from '@modules/admin/biz/admin.biz';

@NgModule({
  declarations: [
    GatherResourcesComponent,
    ResourcesGridDisplayComponent
  ],
  imports: [
    ClarityModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ResourcesGridDisplayComponent]),
    NgSelectModule
  ],
  providers: [AdminBiz]
})
export class GatherResourcesModule { }