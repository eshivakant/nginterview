import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'child-of-one',
  standalone: true,
  template: `<span>User name: {{user.name}}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOfOneComponent {
  @Input() user: any;
}