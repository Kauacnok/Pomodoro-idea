import { id_interval, timer_started, updateTimerForBrowser, Button } from "./startTimer.js"
import { ColorBorder } from "../colorCircleBorder.js"

const Audio = document.querySelector("#audio")

function endTimer() {
    updateTimerForBrowser()
    ColorBorder("#d85d5d", "#d85d5d", "Terminou o tempo")
    clearInterval(id_interval)
    Audio.play()
    Audio.volume -= 0.6
    Button.style.cursor = "default"
}

export { endTimer, timer_started, id_interval }