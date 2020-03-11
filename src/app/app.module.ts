import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TldNgFormsModule } from './modules/tld-ng-forms/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TldNgFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
