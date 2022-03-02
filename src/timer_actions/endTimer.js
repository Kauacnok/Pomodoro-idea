import { id_interval, timer_started, updateTimerForBrowser, Button } from "./startTimer.js"
import { ColorBorder } from "../colorCircleBorder.js"

const Audio = document.querySelector("#audio")
Audio.volume -= 0.6

function endTimer() {
    updateTimerForBrowser()
    ColorBorder("#d85d5d", "#d85d5d", "Terminou o tempo")
    Audio.play()
    Button.style.cursor = "default"
}

export { endTimer, timer_started, id_interval }