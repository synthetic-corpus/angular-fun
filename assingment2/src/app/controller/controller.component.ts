import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  iteration;
  integer = 0;
  @Output('controllerSays') emission = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartClick() {
    // Begin Sending things.
    console.log("start");
    this.iteration = setInterval(()=>{
      this.integer = this.integer + 1;
      this.emission.emit(this.integer);
    },1000)
  }

  onPauseClick() {
    // Stop Sending Things
    console.log("pause");
    clearInterval(this.iteration);

  }

}
