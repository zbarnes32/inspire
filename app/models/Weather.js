export class Weather {
    constructor(data){
        //TODO Drill into the weather object
        this.weatherDescription = data.weather.main
        this.icon = data.weather.icon
        //TODO Drill into the main object
        this.temperature = data.main.temp
    }

    get weatherTemplate(){
        return `
        <button class="fs-3 btn btn-outline-light text-center">
        <p class="fs-4">${this.kelvinToFarhenheit}°</p>
        </button> 
        `
    }

    get detailedWeatherTemplate(){
        return `
        <button class="fs-3 btn btn-outline-light text-center">
        <p class="fs-4">${this.kelvinToFarhenheit}°</p>
        <img src="${this.icon}" alt="weather icon">
        <p class="d-block">${this.weatherDescription}</p>
        </button> 
        `
    }

    get kelvinToCelsius(){
        const conversion = this.temperature - 273.15
        return conversion
    }

    get kelvinToFarhenheit(){
        const conversion = (this.temperature - 273.15) * 1.8 + 32
        const roundedConversion = Math.round(conversion)
        return roundedConversion
    }
}


// rawData (){
//     {
//         "coord": {
//           "lon": -116.2035,
//           "lat": 43.6135
//         },
//         "weather": {
//           "0": {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//           },
//           "icon": "https://openweathermap.org/img/wn/01d.png"
//         },
//         "base": "stations",
//         "main": {
//           "temp": 299.37,
//           "feels_like": 299.37,
//           "temp_min": 297.81,
//           "temp_max": 300.49,
//           "pressure": 1010,
//           "humidity": 26,
//           "sea_level": 1010,
//           "grnd_level": 899
//         },
//         "visibility": 10000,
//         "wind": {
//           "speed": 3.6,
//           "deg": 240
//         },
//         "clouds": {
//           "all": 0
//         },
//         "dt": 1719611905,
//         "sys": {
//           "type": 2,
//           "id": 2043419,
//           "country": "US",
//           "sunrise": 1719576358,
//           "sunset": 1719631812
//         },
//         "timezone": -21600,
//         "id": 5586437,
//         "name": "Boise",
//         "cod": 200,
//         "origin": "https://openweathermap.org"
//       }
