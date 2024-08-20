import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [],
  templateUrl: './four.component.html',
  styleUrl: './four.component.css'
})
export class FourComponent implements OnInit{
  constructor() {
    this.ngOnInit(); 
  }
  
  ngOnInit(): void {
    console.log('nginit called');
  }
}
