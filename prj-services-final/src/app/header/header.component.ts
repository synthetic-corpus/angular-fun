import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    // Input comes from Button.
    // Data is sent via Emitter.
    // Received by App.componnent.
    this.featureSelected.emit(feature);
  }
}
