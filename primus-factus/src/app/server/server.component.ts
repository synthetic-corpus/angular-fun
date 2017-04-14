import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent{
  serverID: number=137;
  serverStatus: string ='offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    var color;
    if (this.getServerStatus() === 'online'){
      return 'green';
    }
    else{
      return 'red';
    };
  }
}
