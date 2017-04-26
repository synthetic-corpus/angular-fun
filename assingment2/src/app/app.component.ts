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
    if (data % 2 === 0){
      this.evenDigits.push(data);
    }else
    {
      this.oddDigits.push(data);
    }
    console.log(this.evenDigits);
    console.log(this.oddDigits);

  }
}
