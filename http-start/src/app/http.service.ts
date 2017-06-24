import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

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
    return this.http.put('https://my-angular-backend.firebaseio.com/data.json',
      servers,
      {headers: headersZ });
  }

  getServers() {
    /* if you want to change a response, and wrap as a new observable...
    ... .map() does that */
    return this.http.get('https://my-angular-backend.firebaseio.com/data.jn')
      .map(
      (response: Response) => {
        const data = response.json();
        //Loop throught the objects
        // Call the objects server.
        // Append something to the end of the server name.
        for (const server of data){
          server.name = server.name + '-q';
        }
        console.log(data);
        return data;

      }
    )
    .catch(
      // Catch method gets the response object that is the error.
      (error: Response) => {
        // console.log(error);
        return Observable.throw('what the fuck?');
      }
    );
  }
}
