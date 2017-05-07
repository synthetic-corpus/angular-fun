export class UsersService {
  activeUsers = ['donnie chang','zulu'];
  inactiveUsers = [];

  setActive(id){
    this.activeUsers.push(this.inactiveUsers[id]);
    if (string in this.inactiveUsers && this.inactiveUsers.length > 0) {
      this.inactiveUsers.splice(id, 1);

    }
  }

  setInactive(string){
    this.inactiveUsers.push(this.activeUsers[id]);
    if (string in this.activeUsers && this.activeUsers.length > 0) {
      this.activeUsers.splice(id, 1);

    }
  }
}
