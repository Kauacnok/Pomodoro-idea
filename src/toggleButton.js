const ToggleButton = document.getElementsByClassName("toggleButton")
const theme = window.localStorage.getItem("theme")

ToggleButton[2].addEventListener("click", themeSwitcher)

let isLightTheme = ""
function configureTheToggleButton() {
	if (isLightTheme) {
		ToggleButton[0].style.justifyContent = "right"
		ToggleButton[2].src = "https://raw.githubusercontent.com/Kauacnok/Pomodoro-idea/main/assets/moon.svg"
	} else {
		ToggleButton[0].style.justifyContent = "left"
		ToggleButton[2].src = "https://raw.githubusercontent.com/Kauacnok/Pomodoro-idea/main/assets/sun.svg"
	}
}

if (theme == "light") document.body.classList.add("light")

configureTheToggleButton()

function themeSwitcher() {
	isLightTheme = document.body.classList.toggle("light")
   	if (theme == "light") {
  		window.localStorage.setItem("theme", "dark")
  		configureTheToggleButton()
   	} else {
   		window.localStorage.setItem("theme", "light")
   		configureTheToggleButton()
   	}
}