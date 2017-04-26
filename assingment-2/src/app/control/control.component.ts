import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit{
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber =0;
  constructor(){}
  ngOnInit(){

  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber+1);
    },1000);
  }

}
