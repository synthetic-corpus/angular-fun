import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';
// Imports the Router, which allows you to change the website
// without keeping reloading the entire app.

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //An empty variable to be loaded by the OnInit function.
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private routerZ: Router,
              private routeZ: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
