import { ColorBorderWhenStart, ColorBorderWhenPause } from "../colorCircleBorder.js"
import { loopTimer, id_interval, updateTimerForBrowser, timer_paused } from "./startTimer.js"

function pauseTimer() {
    if (timer_paused == true) {
        ColorBorderWhenPause()
        clearInterval(id_interval)
        updateTimerForBrowser()
    } else if (timer_paused == false) {
        ColorBorderWhenStart()
        loopTimer()
    }
}

export { pauseTimer, id_interval }