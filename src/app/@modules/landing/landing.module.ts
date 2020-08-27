import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from '@modules/landing/landing.component';
import { LandingRoutingModule } from '@modules/landing/landing-route.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
