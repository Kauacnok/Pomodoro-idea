import { ColorBorderWhenStart } from "../colorCircleBorder.js"
import { pauseTimer } from "./pauseTimer.js"
import { endTimer } from "./endTimer.js"

const Button = document.querySelector("#Button")
const Value_timer = document.querySelector("#valueTimer")

let timer_started = false
let timer_paused = false

let timer_count_down = 25 * 60 // 25 minutes
let seconds = timer_count_down % 60
let minutes = Math.floor(timer_count_down / 60)

let id_interval = ""

Value_timer.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`

Button.addEventListener("click", startTimer)

function startTimer() {
    if (timer_started == false) {
        timer_started = true
        timer_count_down = 25 * 60 // 25 minutes
        ColorBorderWhenStart()
        loopTimer()
    } else if (timer_started == true & timer_paused == false) {
        timer_paused = true
        pauseTimer()
    } else if (timer_started == true & timer_paused == true) {
        timer_paused = false
        pauseTimer()
    }
}

function loopTimer() {
    id_interval = setInterval(() => {
        if (timer_count_down > 0) {
            timer_count_down = timer_count_down - 1
            updateTimerForBrowser()
        } else {
            Button.removeEventListener("click", startTimer)
            endTimer()
        }
    }, 1000)
}

function updateTimerForBrowser() {
    seconds = timer_count_down % 60
    minutes = Math.floor(timer_count_down / 60)
    Value_timer.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

export { Button, updateTimerForBrowser, loopTimer, id_interval, timer_started, timer_paused }