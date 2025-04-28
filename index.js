const seedColor = document.getElementById('seed-color')
const getColorSchemeBtn = document.getElementById('get-color-scheme-btn')
const dropDown = document.getElementById('drop-down')
const colorOne = document.getElementById('color-one')
const colorTwo = document.getElementById('color-two')
const colorThree = document.getElementById('color-three')
const colorFour = document.getElementById('color-four')
const colorFive = document.getElementById('color-five')
const hexOneText = document.getElementById('hex-one')
const hexTwoText = document.getElementById('hex-two')
const hexThreeText = document.getElementById('hex-three')
const hexFourText = document.getElementById('hex-four')
const hexFiveText = document.getElementById('hex-five')

getColorSchemeBtn.addEventListener('click', () => {
  const strippedHex = seedColor.value.replace("#", "")
  const colorSchemeMode = dropDown.value.toLowerCase()

  fetch(`https://www.thecolorapi.com/scheme?hex=${strippedHex}&mode=${colorSchemeMode}`)
    .then(res => res.json())
    .then(colorScheme => {
      const hexOne = colorScheme.colors[0].hex.value
      const hexTwo = colorScheme.colors[1].hex.value
      const hexThree = colorScheme.colors[2].hex.value
      const hexFour = colorScheme.colors[3].hex.value
      const hexFive = colorScheme.colors[4].hex.value

      colorOne.style.backgroundColor = hexOne
      colorTwo.style.backgroundColor = hexTwo
      colorThree.style.backgroundColor = hexThree
      colorFour.style.backgroundColor = hexFour
      colorFive.style.backgroundColor = hexFive

      hexOneText.textContent = hexOne; 
      hexTwoText.textContent = hexTwo; 
      hexThreeText.textContent = hexThree; 
      hexFourText.textContent = hexFour; 
      hexFiveText.textContent = hexFive; 
    })
})

// copy to clipboard
function handleCopyClipboard(text) {
  navigator.clipboard.writeText(text.textContent)
  alert("Copied the text: " + text.textContent)
}



