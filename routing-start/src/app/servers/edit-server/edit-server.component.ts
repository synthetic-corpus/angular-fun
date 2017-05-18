import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
              private routeZ: ActivatedRoute) { }

  ngOnInit() {
    // *Uncomment Code below to log stuff from url!

    // console.log(this.routeZ.snapshot.queryParams);
    // console.log(this.routeZ.snapshot.fragment);

    this.routeZ.queryParams.subscribe();
    this.routeZ.fragment.subscribe();
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
