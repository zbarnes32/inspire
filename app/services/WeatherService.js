import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {

    async getWeather(){
        const response = await api.get('api/weather')
        // ✅ console.log(response.data)
        AppState.weather = new Weather(response.data)
        console.log(AppState.weather)
    }
}

export const weatherService = new WeatherService()