import { id_interval, timer_started, updateTimerForBrowser, Button } from "./startTimer.js"
import { ColorBorderWhenEnd } from "../colorCircleBorder.js"

function endTimer() {
    updateTimerForBrowser()
    ColorBorderWhenEnd()
    clearInterval(id_interval)
    Button.style.cursor = "default"
}

export { endTimer, timer_started, id_interval }