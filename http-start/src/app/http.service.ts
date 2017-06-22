import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  /* Creating this only creates an observable.
     It does not send the request.
     Must be subscribe to else where. */
  constructor(private http: Http) { }
  storeServers(servers: any[]){
    return this.http.post('https://my-angular-backend.firebaseio.com/data.json', servers);
  }

}
