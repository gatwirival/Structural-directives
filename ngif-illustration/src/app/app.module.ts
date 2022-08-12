import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IlusstrationsComponent } from './ilusstrations/ilusstrations.component';

@NgModule({
  declarations: [
    AppComponent,
    IlusstrationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
