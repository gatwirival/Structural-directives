import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';

@NgModule({
  declarations: [
    AppComponent,
    IllustrationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
