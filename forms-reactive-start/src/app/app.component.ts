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

  ngOnInit() {
    // Initialize the form here. This lifecycle hook runs before rendering.

    /*
    Form Group takes a Javascript {} object as its argument.
    */
    this.signupFormX = new FormGroup({
      // First argument of FormControl is the initial value.
      // Rest are optional Validators.
      // Must use the 'Validators' object from @angular/forms above.
      userData: new FormGroup({
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
}
