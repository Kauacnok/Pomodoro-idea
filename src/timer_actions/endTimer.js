import { id_interval, timer_started, updateTimerForBrowser, Button } from "./startTimer.js"
import { ColorBorder } from "../colorCircleBorder.js"
import { Audio } from "../Audio.js"

function endTimer() {
    updateTimerForBrowser()
    ColorBorder("#d85d5d", "#d85d5d", "Terminou o tempo")
    Audio.play()
    Button.style.cursor = "default"
}

export { Audio, endTimer, timer_started, id_interval }