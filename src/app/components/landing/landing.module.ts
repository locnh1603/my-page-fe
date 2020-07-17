import { NgModule } from '@angular/core';
import { LandingQueryDisplayComponent } from 'src/app/components/landing/components/landing-query-display/landing-query-display.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { LandingRoutingModule } from 'src/app/components/landing/landing-route.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingQueryDisplayComponent,
    LandingComponent
  ],
  imports: [
    LandingRoutingModule,
    FormsModule
  ]
})
export class LandingModule { }
