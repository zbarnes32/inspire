import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuotesService {
    async getQuotes() {
        const response = await api.get('api/quotes')
        // ✅ console.log('Did we pull the quote?', response.data)
        AppState.quotes = new Quote(response.data)
    }


}

export const quotesService = new QuotesService()