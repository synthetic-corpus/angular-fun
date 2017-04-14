import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  clicks = []
  visible = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    var howLong = this.clicks.length;
    this.clicks.push(howLong);
    if (!this.visible){
      this.visible = true;
    }
    else{
      this.visible = false;
    }
    console.log(this.visible);
  }

}
