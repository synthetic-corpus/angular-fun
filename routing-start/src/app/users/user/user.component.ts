import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // An empty variable.
  // Expects a object formatted as listed below.
  user: {id: number, name: string};

  // Uses the Acvtivated Router thing. Have to name it.
  constructor(private routeZ: ActivatedRoute){}

  ngOnInit() {
  // Uses the ':id' paramater from the URL.
    this.user = {
      id: this.routeZ.snapshot.params['id'],
      name: this.routeZ.snapshot.params['name']
    };
  }

}
