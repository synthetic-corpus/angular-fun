import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Javascript Objects in here to be passed into app-server-obj
  // Server-obj expects this -> {type: string, name: string, content: string};
  serverElements = [];
}
