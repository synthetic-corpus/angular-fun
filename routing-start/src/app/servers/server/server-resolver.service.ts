// Resolve renders a page.
// Fetches some dynamic data before a page is rendered.
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';


interface serverZ {
  id: number;
  name: string;
  status: string;
};

@Injectable() // Used because this gets a service...
export class resolveThisServer implements Resolve<serverZ> {
  constructor(private serverService: ServersService){}; // needs @Injectable here.
  resolve(
    route: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<serverZ> | Promise<serverZ> | serverZ {
      return this.serverService.getServer(+route.params['id']);
  }
}
