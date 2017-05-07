export class UsersService {
  activeUsers = [];
  inactiveUsers = [];

  setActive(string){
    this.activeUsers.push(string);
    if (string in this.inactiveUsers && this.inactiveUsers.length > 0) {
      var index = this.inactiveUsers.indexOf(string);
      this.inactiveUsers.splice(index, 1);

    }
  }

  setInactive(string){
    this.inactiveUsers.push(string);
    if (string in this.activeUsers && this.activeUsers.length > 0) {
      var index = this.activeUsers.indexOf(string);
      this.activeUsers.splice(index, 1);

    }
  }
}
