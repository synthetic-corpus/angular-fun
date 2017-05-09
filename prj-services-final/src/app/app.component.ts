import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    // Takes an evenit emit from header component.
    // Via *ngIf statements in HTML, changes display.
    this.loadedFeature = feature;
  }
}
