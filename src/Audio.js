const Audio = document.querySelector("#audio")
Audio.volume -= 0.6

function stopAudio() {
    Audio.pause()
    Audio.currentTime = 0
}

export { Audio, stopAudio }