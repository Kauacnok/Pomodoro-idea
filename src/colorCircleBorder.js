import { Button } from "./timer_actions/startTimer.js"

const Border_circle = document.querySelectorAll(".Border_circle")

function ColorBorder(color1, color2, textButton) {
    Border_circle[0].style.borderColor = color1
    Border_circle[1].style.borderColor = color1
    Button.style.borderColor = color2
    updateTextButton(textButton)
}

function updateTextButton(text) {
    Button.innerText = text
}

export { ColorBorder }