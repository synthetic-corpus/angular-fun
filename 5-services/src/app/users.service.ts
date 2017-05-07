export class UsersService {
  activeUsers = ['donnie chang','zulu'];
  inactiveUsers = [];

  setActive(id){
    this.activeUsers.push(this.inactiveUsers[id]);
    if (this.inactiveUsers.length > 0) {
      this.inactiveUsers.splice(id, 1);

    }
  }

  setInactive(id){
    this.inactiveUsers.push(this.activeUsers[id]);
    if (this.activeUsers.length > 0) {
      this.activeUsers.splice(id, 1);

    }
  }
}
