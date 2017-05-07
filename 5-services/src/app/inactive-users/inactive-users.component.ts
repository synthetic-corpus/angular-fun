import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private inactives: UsersService ) {}
  users = this.inactives.inactiveUsers;
  // @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    this.inactives.setAactive(id);
  }
}
