import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Not required for reactive templates.
import { FormsModule } from '@angular/forms'; */
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
