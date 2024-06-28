export class Weather {
    constructor(data){
        //TODO Drill into the weather object
        this.weather = data.weather
        this.icon = data.icon
        //TODO Drill into the main object
        this.temperature = data.main
    }

    get weatherTemplate(){
        return `
        <button class="fs-3 btn btn-outline-light">
        <p>78 degrees</p>
        <i>${this.icon}</i>
        <p>Sunny</p>
        </button> 
        `
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
