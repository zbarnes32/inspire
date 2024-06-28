export class Quote {
    constructor(data) {
        this.author = data.author
        this.quote = data.content
        this.tags = data.tags
    }

    get quoteTemplate() {
        return `
        <div>
            <p class="quote ">${this.quote}</p>
            <p class="author">- ${this.author}</p>
        </div>
        `
    }
}