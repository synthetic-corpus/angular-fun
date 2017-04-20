import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control-area',
  templateUrl: './control-area.component.html',
  styleUrls: ['./control-area.component.css']
})
export class ControlAreaComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, ServerContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, ServerContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit() //What Object will this emit?
  }

  onAddBlueprint() {
    this.serverCreated.emit()
  }

}
