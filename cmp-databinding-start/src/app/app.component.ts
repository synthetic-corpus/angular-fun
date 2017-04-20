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

  onServerAdded(serverData:{serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData:{serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}
