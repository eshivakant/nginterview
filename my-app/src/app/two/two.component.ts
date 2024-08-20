import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [JsonPipe, HttpClientModule],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  
  data: any;

  constructor(private http: HttpClient) {}
  
  getWeatherData() {
    this.http.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
    .subscribe(data => {
      this.data = data;
    });
  }

  
}
