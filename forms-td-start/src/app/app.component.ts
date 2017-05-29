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
    /* setValue sets value of the Javascript object.
     That signform submits.
      this.signupForm.setValue({
        userData:{
          "the rest of JSON object is here"
        }
      })
      */
      /* Patchvlue changes exactly one entry. */
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  @ViewChild('f') signupForm: NgForm;
  name ='';
  answer ='';
  defaultQuestion = "teacher";
  genders =['male','female','fluid','trans','no'];

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
