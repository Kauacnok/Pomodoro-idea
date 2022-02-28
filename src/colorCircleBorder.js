import { Button } from "./startTimer.js"

const Border_circle = document.querySelectorAll(".Border_circle")

function ColorBorderWhenStart() {
    Border_circle[0].style.borderColor = "#90ee90"
    Border_circle[1].style.borderColor = "#90ee90"
    Button.style.borderColor = "#fdfd81"
    updateTextButton("Pausar")
}

function ColorBorderWhenPause() {
    Border_circle[0].style.borderColor = "#fdfd81"
    Border_circle[1].style.borderColor = "#fdfd81"
    Button.style.borderColor = "#90ee90"
    updateTextButton("Retomar tempo")
}

function ColorBorderWhenEnd() {
    Border_circle[0].style.borderColor = "#d85d5d"
    Border_circle[1].style.borderColor = "#d85d5d"
    Button.style.borderColor = "#d85d5d"
    updateTextButton("Terminou o tempo")
}

function updateTextButton(text) {
    Button.innerText = text
}

export { ColorBorderWhenStart, ColorBorderWhenPause, ColorBorderWhenEnd }