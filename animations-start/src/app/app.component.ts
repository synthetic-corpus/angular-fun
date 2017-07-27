import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
/* What do the import do?
  Trigger is entered in the animations array. Holds the name of the the state and Transition
  State holds the names of states, and style as paramaters.
  Style contians a CSS styling change.
  Transition controls the movement between them.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* Animations Declared Here */
  animations: [
    /* Animations Triggers are declared with arbitrary names. In first Param
      An Array of animation metadata */
    trigger('divstate', [
      // An array of functions.
      // Paramaters are:
      // (Name of state,style({ CSS Transitions })
      state('normal', style({
        'background-color':'green',
        transform:'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform:'translateX(100px)'
      })),
      transition('normal => highlighted', animate(1000)),
      transition('highlighted => normal',animate(400))
    ]),
    trigger('wildstate', [
      state('normal', style({
        'background-color':'green',
        transform:'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform:'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'yellow',
        transform:'translateX(0) scale(0.5)'
      })),
      // From normal to Highlighted and vice versa.
      transition('normal <=> highlighted', animate(800)),
      // From shrunken to anything and vice versa.
      transition('shrunken <=> *', animate(600))
    ])
  ]
})
export class AppComponent {
	list = ['Milk', 'Sugar', 'Bread'];
  stateZ = 'normal';
  stateW = 'normal';
	onAdd(item) {
		this.list.push(item);
	}

  onAnimate(){
    this.stateZ == 'normal' ? this.stateZ = 'highlighted' : this.stateZ = 'normal';
    this.stateW == 'normal' ? this.stateW = 'highlighted' : this.stateW = 'normal';
  }

  onShrink(){
    this.stateW = 'shrunken';
  }

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}
}
