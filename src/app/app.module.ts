import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { AdminComponent } from './components/admin/admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LandingQueryDisplayComponent } from './components/landing/components/landing-query-display/landing-query-display.component';
import { AdminModule } from 'src/app/components/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AdminComponent,
    LandingQueryDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
