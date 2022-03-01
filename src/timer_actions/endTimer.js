import { id_interval, timer_started, updateTimerForBrowser, Button } from "./startTimer.js"
import { ColorBorder } from "../colorCircleBorder.js"

function endTimer() {
    updateTimerForBrowser()
    ColorBorder("#d85d5d", "#d85d5d", "Terminou o tempo")
    clearInterval(id_interval)
    Button.style.cursor = "default"
}

export { endTimer, timer_started, id_interval }