import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenDigits = [];
  oddDigits = [];
  public appendThis(data){
    this.evenDigits.push(data);
    console.log(this.evenDigits);

  }
}
