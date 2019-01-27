import { Component } from '@angular/core';
import {state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100)'
      }))
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';

    onAdd(item) {
      this.list.push(item);
    }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
