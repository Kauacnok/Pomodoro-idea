import { ColorBorder } from "../colorCircleBorder.js"
import { loopTimer, id_interval, updateTimerForBrowser, timer_paused, colorTaskCircle } from "./startTimer.js"

function pauseTimer() {
    if (timer_paused == true) {
        ColorBorder("#fdfd81", "#90ee90", "Retomar tempo")
        colorTaskCircle("#fdfd81")
        clearInterval(id_interval)
        updateTimerForBrowser()
    } else if (timer_paused == false) {
        ColorBorder("#90ee90", "#fdfd81", "Pausar")
        colorTaskCircle("#90ee90")
        loopTimer()
    }
}

export { pauseTimer, id_interval }