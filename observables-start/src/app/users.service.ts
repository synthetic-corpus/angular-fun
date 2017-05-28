// A subject both listens to objects...
// .. and can subscribe to them.
import { Subject } from 'rxjs/Subject';

export class UsersService {
  userActivated = new Subject();
}
