

export class AuthService {
  // simulates a log in and log out.
  loggedIn = false;

  isAuthenticated(){
    // uses a promise.
    // Promise runs functions (resolve/reject) before it returns its value.
    // 'promises' to return something after running functions.
    const logstat = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn)
        }, 800); // No reject condition.
      }
    );
    return logstat;
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
}
