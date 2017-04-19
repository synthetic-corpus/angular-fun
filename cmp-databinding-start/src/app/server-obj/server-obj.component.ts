import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-obj',
  templateUrl: './server-obj.component.html',
  styleUrls: ['./server-obj.component.css']
})
export class ServerObjComponent implements OnInit {
  element: {type: string, name: string, content: string}; // 'element' is a Javascript object.

  constructor() { }

  ngOnInit() {
  }

}
