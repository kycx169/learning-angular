import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  textCityName = '';
  cityName = '';
  temp = '';
  isLoading = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getTemp('Hanoi')
    .then(temp => console.log(temp))
    .catch(err => console.log(err));
  }

  getWeather() {
    this.isLoading = true;
    this.weatherService.getTemp(this.textCityName)
    .then(temp => {
      this.cityName = this.textCityName;
      this.temp = temp;
      this. isLoading = false;
      this.textCityName = '';
    })
    .catch(
        err => {
            alert('Cannot find your city');
            this.isLoading = false;
            this.cityName = '';
            this.textCityName = '';
    });
  }

  getMessage() {
    if(this.isLoading){
      return "is loading...";
    }
    return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp  )
  }

}
