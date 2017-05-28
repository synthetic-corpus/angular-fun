import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Declare properties of type Subscription. To be assigned later.
  // "Subscription" is imported above.
  customObservable: Subscription;

  constructor() { }

  ngOnInit() {

    // Simple Observable Construction
    const myObservable = Observable.create((observer: Observer<string>) => {
      // All Time outs are not nested. Therefore, they will start at the same time.
      setTimeout(()=> {
        observer.next('first package');
      }, 2000);
      setTimeout(()=> {
        observer.next('second package');
      }, 4000);
      setTimeout(()=> {
        observer.error('failed!');
      }, 6000);
      setTimeout(()=> {
        observer.complete();
      },5000)
    });
    // Listens to the observable above.
    this.customObservable = myObservable.subscribe(
      // Observables send 'data', 'error', and 'completion'...
      // define what you do with them here.
      // when you get data => { do this }
      (data: string) => { console.log(data); },
      // when you get an error => { do this }
      (error: string) => { console.log(error); },
      // when complete do this. called when complete() is called.
      () => { console.log('completed'); }
    )
  }

  ngOnDestroy() {
    // Run the Unsubscribe method so no memory leaks.
    this.customObservable.unsubscribe();
  }

}
