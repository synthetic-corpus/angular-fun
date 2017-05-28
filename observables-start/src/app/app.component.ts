import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Active = false;
  user2Active = false;
  hearThis: Subscription;

  constructor(private usersService: UsersService ) {}

  ngOnInit() {
    this.hearThis = this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Active = true;
        }
        if (id === 2) {
          this.user2Active = true;
        }
      }
    )
  }

  ngOnDestroy() {
    this.hearThis.unsubscribe();

  }
}
