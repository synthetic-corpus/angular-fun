import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-area',
  templateUrl: './control-area.component.html',
  styleUrls: ['./control-area.component.css']
})
export class ControlAreaComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
