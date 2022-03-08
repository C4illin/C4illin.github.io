document.getElementById("fullpage").style.display = ""

var sectColor = ['black']

var sectLength = document.getElementsByClassName("section").length

const colors = randomColor({ count: sectLength - sectColor.length })

sectColor = sectColor.concat(colors)

sectColor[6] = 'black'
sectColor[7] = "#f46607"

new fullpage('#fullpage', {
  sectionsColor: sectColor,
  licenseKey: 'W3OlN!Z$y4'
})