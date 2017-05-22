import { Observable } from 'rxjs/Observable';
import { CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
  // canDeactivate shares the same strtucte as the can activate auth guard.
  // look up what 'interface' means later.
  canDeactivate: () => Observable<boolean>|Promise<boolean>|boolean
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  // This route here will be called be the Angular router...
  // .. once the user tries to leave a route.
  // But how does this make sense?
  //
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
                {
                  return component.canDeactivate();
                }
}
