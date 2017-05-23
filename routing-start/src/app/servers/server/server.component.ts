import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from '../servers.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private theRoute: ActivatedRoute,
              private router: Router) { }


  ngOnInit() {
    this.theRoute.data
      .subscribe(
        (dataWhat: Data) => {
          this.server = dataWhat['serverZ'];
        }
      )
    /*  Not needed if using ResolveThisServer

    const id = +this.theRoute.snapshot.params['id'];
    console.log("my ID is ",id);
    this.server = this.serversService.getServer(id);
    this.theRoute.params
    .subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
    */
  }
  onEdit(){
    // Do something: Navigate programatically to edit server componoent.
    // To pass on query params, use queryParamsHandling object.
    this.router.navigate(['/servers',this.server.id,'edit'],
        {queryParamsHandling: 'preserve'}); // Absolute path.
        // string 'preserve': saves the queryParams.
        // strig 'merge': adds new ones?
    // Alternate:
    // this.router.navigate(['edit'],{relativeTo: this.route});
  }

}
