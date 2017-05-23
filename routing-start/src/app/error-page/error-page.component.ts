import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string; // A variable error message that is of type string.


  constructor(private theRoute: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.theRoute.snapshot.data['message'];
  }

}
