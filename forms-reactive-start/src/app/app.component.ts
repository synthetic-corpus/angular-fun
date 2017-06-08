import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female', 'trans', 'fluid','alien'];
  // FormGroup is the first important import for reactive forms.
  // FormGroups may be nested within FormGroups.
  signupFormX: FormGroup;
  forbiddenUsers = ['Mike','Salome'];

  ngOnInit() {
    // Initialize the form here. This lifecycle hook runs before rendering.

    /*
    Form Group takes a Javascript {} object as its argument.
    */
    this.signupFormX = new FormGroup({
      // First argument of FormControl is the initial value.
      // Rest are optional Validators.
      // Must use the 'Validators' object from @angular/forms above.
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required] ),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

  }

  onAddHobby(){
    // Create a control object in which has a null value.
    const control = new FormControl(null, Validators.required);
    // For some reason, the sign up form must be cast with <FormArray>
    (<FormArray>this.signupFormX.get('hobbies')).push(control);
  }

  onSubmitThis(){
    console.log(this.signupFormX);
  }

  // A Validator is nothing other than function written in a specific way
  // 1. Takes a form control as an argument
  // 2. {[s: String]: boolean} tells it what kind of return to expect.
  // 3. Second { ... } does the work of validation.

  forbiddenNames(control: FormControl): {[s:string]: boolean} {
      if (this.forbiddenUsers.indexOf(control.value)) {
        return {'nameIsForbidden': true};
      }
      // If validation is successfull, pass nothing or return null
      return null;
  }
}
