// deal with the user interface

class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');

    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp + " K";
        this.string.textContent = `${weather.main.temp} K (${Math.round(weather.main.temp - 273.15)}°C)`

        this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} K (${Math.round(weather.main.temp - 273.15)}°C)`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} mb`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;


    }

}