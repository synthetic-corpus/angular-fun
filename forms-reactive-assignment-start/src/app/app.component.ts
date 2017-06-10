import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectFormX: FormGroup;

  ngOnInit(){
    this.projectFormX = new FormGroup(
      {
        'projectNomen': new FormControl(null,[Validators.required]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'status': new FormControl(null,[Validators.required])
      }
    )
  }
}
