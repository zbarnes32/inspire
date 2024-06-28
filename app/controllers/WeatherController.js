import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {
    constructor() {
        // ✅ console.log('Weather Controller, things look great 🌤⛈')
        this.getWeather()
    }

    async getWeather(){
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
            console.error('Unable to get the weather', error)
        }
    }

    drawWeather(){
        const weather = AppState.weather
        let innerHTMLString = `${weather.weatherTemplate}`
        setHTML('weather', innerHTMLString)
    }
}