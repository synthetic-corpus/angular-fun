import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class UsersService {
  activeUsers = ['Donnie','Henry','Andrea'];
  inactiveUsers = ['Max','Anna','Kelly'];
  constructor(private countZ: LoggingService) {

  }


  setActive(id){
    this.activeUsers.push(this.inactiveUsers[id]);
    if (this.inactiveUsers.length > 0) {
      this.inactiveUsers.splice(id, 1);
      this.countZ.iterate();
    }
  }

  setInactive(id){
    this.inactiveUsers.push(this.activeUsers[id]);
    if (this.activeUsers.length > 0) {
      this.activeUsers.splice(id, 1);
      this.countZ.iterate();

    }
  }
}
