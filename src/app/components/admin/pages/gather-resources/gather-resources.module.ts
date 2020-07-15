import { NgModule } from '@angular/core';
import { GatherResourcesComponent } from 'src/app/components/admin/pages/gather-resources/gather-resources.component';
import { AdminNavigatorModule } from 'src/app/components/navigator/admin-navigator.module';
import { ResourcesGridDisplayComponent } from 'src/app/components/admin/pages/gather-resources/components/resources-grid-display/resources-grid-display.component';
import { AgGridModule } from 'ag-grid-angular';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { AdminBiz } from 'src/app/components/admin/biz/admin.biz';
import 'ag-grid-enterprise'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    GatherResourcesComponent,
    ResourcesGridDisplayComponent
  ],
  imports: [
    ClarityModule,
    CommonModule,
    FormsModule,
    AdminNavigatorModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ResourcesGridDisplayComponent]),
    NgSelectModule
  ],
  providers: [AdminBiz]
})
export class GatherResourcesModule { }