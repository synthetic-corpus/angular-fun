import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-serversbox', <-- like that for <div class="app-serversbox"> HTML
  // selector: '[app-serversbox]', <- like that for <div app-servers> HTML
  selector: 'app-serversbox', // <-- normal way to do a selector. <app-serversbox>
  templateUrl: './serversbox.component.html',
  styleUrls: ['./serversbox.component.css']
})
export class ServersboxComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "not here!";
  serverName ='';
  serverCreated = false;
  servers = ['Thing1', 'thing2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "it's been made! It's name is "+ this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
