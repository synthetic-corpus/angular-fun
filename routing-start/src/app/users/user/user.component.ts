import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // An empty variable.
  // Expects a object formatted as listed below.
  user: {id: number, name: string};

  constructor() { }

  ngOnInit() {
  }

}
