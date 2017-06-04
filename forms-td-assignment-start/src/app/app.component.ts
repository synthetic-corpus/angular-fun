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
    console.log(this.xForm.form.value);
    this.email = this.xForm.form.value.email;
    this.rank = this.xForm.form.value.rank;
    this.pass = this.xForm.form.value.password;
  }

  email: string;
  rank: string;
  pass: string;

}
