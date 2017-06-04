import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('x') xForm: NgForm;
  onSubmit(Form: NgForm){
    console.log(this.xForm);
  }

}
