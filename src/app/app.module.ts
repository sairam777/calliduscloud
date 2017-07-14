import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlanwizardComponent } from './planwizard/planwizard.component';
import { FooterComponent } from './footer/footer.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanwizardComponent,
    FooterComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
