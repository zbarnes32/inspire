import { AppState } from "../AppState.js"
import { imagesService } from "../services/ImagesService.js"
import { Pop } from "../utils/Pop.js"

export class ImagesController {
    constructor() {
        // ✅ console.log('Picture Perfect at the Image Controller 📸🏞')
        this.getBackgroundImage()
        AppState.on('backgroundImages', this.drawBackgroundImage)
    }

    async getBackgroundImage(){
        try {
            await imagesService.getBackgroundImage()
        } catch (error) {
            Pop.error(error)
            console.error('Unable to get background image', error)
        }
    }

    drawBackgroundImage(){
        const bgImage = AppState.backgroundImages
        // @ts-ignore
        document.body.style.backgroundImage = `url(${bgImage.largeImgUrl})`
    }
}