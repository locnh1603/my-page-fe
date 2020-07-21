import { NgModule } from '@angular/core';
import { GatherResourcesComponent } from 'src/app/components/admin/pages/gather-resources/gather-resources.component';
import { ResourcesGridDisplayComponent } from 'src/app/components/admin/pages/gather-resources/components/resources-grid-display/resources-grid-display.component';
import { AgGridModule } from 'ag-grid-angular';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { AdminBiz } from 'src/app/components/admin/biz/admin.biz';
import 'ag-grid-enterprise'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GatherCuisinesComponent } from 'src/app/components/admin/pages/gather-cuisines/gather-cuisines.component';
import { CuisinesGridDisplayComponent } from './components/cuisines-grid-display/cuisines-grid-display.component';

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