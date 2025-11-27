console.log("Page loaded correctly")

// disable refresh page to avoid losing progress
let rDown = false;
window.addEventListener("keydown", event => {
    if (event.key == 'r')
        rDown = true;
})
window.addEventListener("keyup", event => {
    if (event.key == 'r')
        rDown = false;
})
window.addEventListener("beforeunload", (event) => {
  if (rDown) event.preventDefault()
})

// update title
let titleInput = document.getElementById("title")
titleInput.addEventListener("focusout", (event) => {
  title = titleInput.value
})

// disappearing text
let title = "Untitled"
text = "" // text that will be saved into the .md file
let htmlTextList = [] // text that will be shown on the screen, separate by paragraphs for styling
let currentParagraph = ""
const savedText = document.getElementById("saved-text");
let textInput = document.getElementById("text-input")

textInput.addEventListener("keyup", (event) => {
  if (event.key == " ") {
    currentParagraph += `${textInput.value} `
    updateText(`${textInput.value} `)
  } else if (event.key == "Enter") {
    currentParagraph += `${textInput.value}\n`
    htmlTextList.push(currentParagraph)
    currentParagraph = ""
    updateText(`${textInput.value}\n`)
  }
});

function updateText(addition) {
  text += addition
  textInput.value = ""

  // text view in page
  htmlText = ""
  for (let i = 0; i < htmlTextList.length; i++) {
    htmlText += `<p>${htmlTextList[i]}</p>`
  }
  htmlText += `<p>${currentParagraph}</p>`
  htmlText += `<div id="anchor"></div>`

  savedText.innerHTML = htmlText

  if (text.length > 0) {
    textInput.placeholder = ". . ."
  }
}

// save file
document.getElementById("save-file").addEventListener("click", async () => {
  updateText(textInput.value)
  
  const res = await api.createNote({ title, text })
  console.log('Saving file finished, success = ', res);
  textInput.focus()
})

// delete all
document.getElementById("delete-all").addEventListener("click", async () => {
  const confirmation = await api.checkDeleteAll()
  if (confirmation) {
    text = ""
    savedText.innerHTML = ""
    htmlTextList = []
    currentParagraph = ""
    textInput.value = ""
    title = "Untitled"
    titleInput.value = ""
    textInput.placeholder = "Just start writing..."
  }
  textInput.focus()
})
