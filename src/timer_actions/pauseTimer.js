import { ColorBorderWhenStart, ColorBorderWhenPause } from "../colorCircleBorder.js"
import { loopTimer, id_interval, updateTimerForBrowser, timer_paused, colorTaskCircle } from "./startTimer.js"

function pauseTimer() {
    if (timer_paused == true) {
        ColorBorderWhenPause()
        colorTaskCircle("#fdfd81")
        clearInterval(id_interval)
        updateTimerForBrowser()
    } else if (timer_paused == false) {
        ColorBorderWhenStart()
        colorTaskCircle("#90ee90")
        loopTimer()
    }
}

export { pauseTimer, id_interval }