import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuotesController {
    constructor() {
        // ✅ console.log('Finding inspiration at the Quotes Controller 💡🎤')
        AppState.on('quotes', this.drawQuotes)
        this.getQuotes()
    }

    async getQuotes() {
        try {
            await quotesService.getQuotes()
        } catch (error) {
            Pop.error(error)
            console.error('Unable to get quote', error)
        }
    }

    drawQuotes() {
        const quotes = AppState.quotes
        console.log(quotes)
        let quoteHTML = `${quotes.quoteTemplate}`
        setHTML('quotes', quoteHTML)


    }
}