import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private theRoute: ActivatedRoute) { }
  // id = ;

  ngOnInit() {
    // Assignment. Get this to work with Server ID passed via route.
    // console.log('Params are ',this.theRoute.snapshot.queryParams);
    // console.log('Fragment is ',this.theRoute.snapshot.fragment);
    // console.log(this.theRoute.snapshot.params['id']);
    // console.log('My id is ',this.id);
    const id = +this.theRoute.snapshot.params['id'];
    console.log("my ID is ",id);
    this.server = this.serversService.getServer(id);
    this.theRoute.params
    .subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

}
