import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { OddComponent } from './control/odd/odd.component';
import { EvenComponent } from './control/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
