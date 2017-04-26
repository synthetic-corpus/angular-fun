import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  interger = 0;
  @Output() number: number; // Will fill this out later

  constructor() { }

  ngOnInit() {
  }

  onStartClick() {
    // Begin Sending things.
    console.log("start")
  }

  onPauseClick() {
    // Stop Sending Things
    console.log("pause")
  }

}
