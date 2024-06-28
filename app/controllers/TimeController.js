import { setHTML } from "../utils/Writer.js"

export class TimeController {
    constructor() {
        // ✅ console.log('Times are good in the Time Controller 🕰')
        this.drawTime()
        setInterval(this.drawTime, 1000)
    }

    drawTime(){
        let time = new Date()
        let formattedTime = time.toLocaleTimeString()
        setHTML('time', formattedTime)
        // ✅ console.log(formattedTime)
        // return time
    }
}

