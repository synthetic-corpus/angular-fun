import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  canEdit = false;

  constructor(private serversService: ServersService,
              private routeZ: ActivatedRoute) { }

  ngOnInit() {
    // *Uncomment Code below to log stuff from url!

    // console.log(this.routeZ.snapshot.queryParams);
    // console.log(this.routeZ.snapshot.fragment);
    const id = +this.routeZ.snapshot.params['id'];

    this.routeZ.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.canEdit = queryParams['allowEdit'] === '1' ?  true : false;
        }
      );
    this.routeZ.fragment.subscribe();
    // The argument in getServer is the ID of the server.
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    // Gets some inputs from NGmodel and sends them to the servers.Service
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
