import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherService {
    constructor(private http:Http) {}
    getTemp(cityName: string) {
        const url = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=4a796a62525b63328ed1ae4959a7f65e";
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.main.temp);
    }
}