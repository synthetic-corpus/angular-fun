import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      // Rest are option. Validators.
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }
}
