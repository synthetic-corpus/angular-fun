import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  gameRunning = false;
  someNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.gameRunning = true;
  }

  pauseGame() {
    this.gameRunning = false;
  }

  emitNumber() {
    while (this.gameRunning) {
      //send numbers
    }

  }

}
