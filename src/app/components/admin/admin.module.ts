import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from 'src/app/services/main.service';
import { AgGridModule } from 'ag-grid-angular';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GatherResourcesComponent } from './pages/gather-resources/gather-resources.component';
import { GatherCraftsComponent } from './pages/gather-crafts/gather-crafts.component';
import { GatherCuisinesComponent } from './pages/gather-cuisines/gather-cuisines.component';

@NgModule({
  declarations: [
  GatherResourcesComponent,
  GatherCraftsComponent,
  GatherCuisinesComponent],
  imports: [
  ]
})
export class AdminModule { }
