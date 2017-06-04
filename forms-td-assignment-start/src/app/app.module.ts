import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgForm} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  @ViewChild('x') xForm: NgForm;
  onSubmit(Form: NgForm){
    console.log(this.xForm);
  }
}
