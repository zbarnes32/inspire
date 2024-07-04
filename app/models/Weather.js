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
            return `<p class="fs-4">${this.kelvinToFahrenheit}°F</p>`
        } else {
            return `<p class="fs-4">${this.kelvinToCelsius}°C</p>`
        }
    }
    get detailedWeatherTemplate() {
        return `
        ${this.weatherTemplate}
        <img src="${this.icon}" alt="weather icon">
        <p class="d-block">${this.weatherDescription}</p>
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
