import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // Any modules
  imports: [
    BrowserModule
  ],
  // Any global services
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
