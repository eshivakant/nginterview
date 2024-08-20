import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildOfOneComponent } from './child-of-one/child-of-one.component';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [ChildOfOneComponent],
  template:`
                <h1>Component One</h1>
                <child-of-one [user]="user"></child-of-one>
                <br/>
                <br/>
                <button (click)="changeTitle()">Change Name to Steve</button>
  `
})
export class OneComponent {
  user = {name : 'Jonny'};

  changeTitle() {
    this.user.name = 'Steve'; 
  }

}
