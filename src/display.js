// keep scroll at the bottom
window.addEventListener("keyup", () => {
  document.getElementById("anchor").scrollIntoView()
})

// color display
let darkMode = true
const lightMode_button = document.getElementById("light-mode")
const darkMode_button = document.getElementById("dark-mode")

lightMode_button.addEventListener("click", changeColorDisplay)
darkMode_button.addEventListener("click", changeColorDisplay)
function changeColorDisplay(event) {
  if (darkMode) {
    Array.from(document.getElementsByClassName("dark-background")).forEach((element) => {
      element.classList.replace("dark-background", "light-background")
    })
    Array.from(document.getElementsByClassName("dark-color")).forEach((element) => {
      element.classList.replace("dark-color", "light-color")
    })
    Array.from(document.getElementsByClassName("dark-button")).forEach((element) => {
      element.classList.replace("dark-button", "light-button")
    })
    lightMode_button.style.display = "none"
    darkMode_button.style.display = "inline-block"
  } else {
    Array.from(document.getElementsByClassName("light-background")).forEach((element) => {
      element.classList.replace("light-background", "dark-background")
    })
    Array.from(document.getElementsByClassName("light-color")).forEach((element) => {
      element.classList.replace("light-color", "dark-color")
    })
    Array.from(document.getElementsByClassName("light-button")).forEach((element) => {
      element.classList.replace("light-button", "dark-button")
    })
    lightMode_button.style.display = "inline-block"
    darkMode_button.style.display = "none"
  }

  darkMode = !darkMode
  console.log("Color display changed, darkMode = ", darkMode)
  textInput.focus()
}

// saved text display
let textIsShowing = false
const showSavedText_button = document.getElementById("show-saved-text")
const hideSavedText_button = document.getElementById("hide-saved-text")

showSavedText_button.addEventListener("click", changeSavedTextDisplay)
hideSavedText_button.addEventListener("click", changeSavedTextDisplay)
function changeSavedTextDisplay(event) {
  if (textIsShowing) {
    savedText.style.visibility = "hidden"
    savedText.style.height = "30vh"
    showSavedText_button.style.display = "inline-block"
    hideSavedText_button.style.display = "none"
  } else {
    savedText.style.visibility = "visible"
    savedText.style.height = "45vh"
    showSavedText_button.style.display = "none"
    hideSavedText_button.style.display = "inline-block"
  }
  textIsShowing = !textIsShowing
  console.log("Changind saved text display, textIsSHowing = ", textIsShowing)
  textInput.focus()
}