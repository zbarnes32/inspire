import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class ImagesService {
    async getBackgroundImage(){
        // ✅ console.log("hello there")
        const response = await api.get('api/images')
        // ✅ console.log('Did we get the background image', response.data)
        AppState.backgroundImages = response.data
        console.log(AppState.backgroundImages)
    }
}

export const imagesService = new ImagesService()