import { Component } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private inactives: UsersService ) {}
  users = this.inactives.inactiveUsers;

  onSetToActive(id: number) {
    this.inactives.setActive(id);
  }
}
