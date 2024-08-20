import { Component } from '@angular/core';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [],
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent {

  changeColor() {
    if (document!.getElementById('test')?.style.color) {
      document.getElementById('test')!.style!.color = 'red';
    }
    
  }
}
