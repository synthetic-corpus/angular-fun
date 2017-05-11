import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    // The argument in getServer is the ID of the server.
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    // Gets some inputs from NGmodel and sends them to the servers.Service
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
