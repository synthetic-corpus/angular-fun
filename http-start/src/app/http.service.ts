import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {
  /* Creating this only creates an observable.
     It does not send the request.
     Must be subscribe to else where. */
  constructor(private http: Http) { }

  storeServers(servers: any[]){
    // Headers objected imported from @angular/http
    // Specific headers are determined by back end API.
    // In this case, the headers are redundant as they refer to default.
    const headersZ = new Headers({'Content-Type':'application/json'});
    return this.http.post('https://my-angular-backend.firebaseio.com/data.json',
      servers,
      {headers: headersZ });
  }

  getServers() {
    return this.http.get('https://my-angular-backend.firebaseio.com/data.json');
  }
}
