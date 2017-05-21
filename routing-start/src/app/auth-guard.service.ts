// used to protect certain paths.
// Forces the class to user the 'Can Activate Method'
// CanActivate requires ActivatedRouteSnapShot and RouterStateSnapshot modules.
// These are used as arguments.
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Router } from '@angular/router';
// Also required by CanActivte.
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable() //Can inject a service into this service.
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService,
              private myRouter: Router) {}
  canActivate(routeZ: ActivatedRouteSnapshot,
              stateZ: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
              {
                  return this.authService.isAuthenticated()
                    .then( // used with a Promise
                      (authenticated: boolean) => {
                        if (authenticated) {
                          return true;
                        }else{
                          // Navigate users away
                          this.myRouter.navigate(['/']);
                        }
                      }
                    );
              }
}
