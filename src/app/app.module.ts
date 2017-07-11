import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlanwizardComponent } from './planwizard/planwizard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanwizardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
