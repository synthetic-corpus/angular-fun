import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectFormX: FormGroup;
  badNames =['test'];

  ngOnInit(){
    this.projectFormX = new FormGroup(
      {
        'projectNomen': new FormControl(null,[Validators.required,this.checkBadNames.bind(this)]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'status': new FormControl(null,[Validators.required])
      }
    )
  }

  onSubmit(){
    console.log(this.projectFormX);
  }

  checkBadNames(nomen: FormControl){
    if (this.badNames.indexOf(nomen.value) != -1){
      // Return the error message
      return {'badName': true}
    }else{
      return null;
    }
  }
}
