import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ControlAreaComponent } from './control-area/control-area.component';
import { ServerObjComponent } from './server-obj/server-obj.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlAreaComponent,
    ServerObjComponent
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
