import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-serversbox', <-- like that for <div class="app-serversbox"> HTML
  // selector: '[app-serversbox]', <- like that for <div app-servers> HTML
  selector: 'app-serversbox', // <-- normal way to do a selector. <app-serversbox>
  templateUrl: './serversbox.component.html',
  styleUrls: ['./serversbox.component.css']
})
export class ServersboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
