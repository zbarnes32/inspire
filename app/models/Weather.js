export class Weather {
    constructor(data) {
        this.weatherDescription = data.weather['0'].main
        this.icon = data.weather.icon
        this.temperature = data.main.temp
        this.isFahrenheit = false
    }
    toggleTemperature() { 
        this.isFahrenheit = !this.isFahrenheit
    }
    get weatherTemplate() {
        if (this.isFahrenheit) {
            return `<p class="mb-0">${this.kelvinToFahrenheit}°F</p>`
        } else {
            return `<p class="mb-0">${this.kelvinToCelsius}°C</p>`
        }
    }
    get detailedWeatherTemplate() {
        return `
        <span class="degree-size">${this.weatherTemplate}</span>
        <img class="fs-6" src="${this.icon}" alt="weather icon">
        <p class="d-block mb-0 fs-5">${this.weatherDescription}</p>
        `
    }

    get kelvinToCelsius() {
        const conversion = this.temperature - 273.15
        const roundedConversion = Math.round(conversion)
        return roundedConversion
    }

    get kelvinToFahrenheit() {
        const conversion = (this.temperature - 273.15) * 1.8 + 32
        const roundedConversion = Math.round(conversion)
        return roundedConversion
    }

}
