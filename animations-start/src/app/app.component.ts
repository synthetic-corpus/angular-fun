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
    ])
  ]
})
export class AppComponent {
	list = ['Milk', 'Sugar', 'Bread'];
  stateZ = 'normal';
	onAdd(item) {
		this.list.push(item);
	}

  onAnimate(){
    this.stateZ == 'normal' ? this.stateZ = 'highlighted' : this.stateZ = 'normal';
  }

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}
}
