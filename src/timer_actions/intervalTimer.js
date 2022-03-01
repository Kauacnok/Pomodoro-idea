import { startTimer, Value_timer, Button, count_of_tasks } from "./startTimer.js"

let intervalTimer_count_down = 5 * 60 // 5 minutes
var seconds = intervalTimer_count_down % 60
var minutes = Math.floor(intervalTimer_count_down / 60)
let clearIntervalTimer = ""


function intervalTimer() {
    intervalTimer_count_down = 5 * 60 // 5 minutes
    clearIntervalTimer = setInterval(() => {
        if (intervalTimer_count_down > 0) {
            intervalTimer_count_down = intervalTimer_count_down - 1
            seconds = intervalTimer_count_down % 60
            minutes = Math.floor(intervalTimer_count_down / 60)
            Value_timer.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
        } else {
            clearInterval(clearIntervalTimer)
            if ( count_of_tasks < 4 ) {
                Button.addEventListener("click", startTimer)
                Button.innerText = "Iniciar próxima tarefa"
                Button.style.borderColor = "#90ee90"
                Button.style.cursor = "pointer"
            }
        }
    }, 1000)
}

export { intervalTimer }