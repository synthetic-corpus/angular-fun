import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theblanks',
  templateUrl: './theblanks.component.html',
  styleUrls: ['./theblanks.component.css']
})
export class TheblanksComponent implements OnInit {
  username ='';
  enable = Boolean(this.username);

  constructor() { }

  ngOnInit() {
  }

}
