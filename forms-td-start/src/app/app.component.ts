import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  @ViewChild('f') signupForm: NgForm;
  name ='';

  onSubmit(form: NgForm){
      console.log(this.signupForm);
  }
  /* Old method. Returns and HTML object.
  onSubmit(form: HTMLFormElement) {
    console.log(form);
  }*/
  /* Not Viewchild method.
   Why both with ViewChild? I do not know.
  onSubmit(form: NgForm){
    console.log(form);
  }*/
}
