document.getElementById("fullpage").style.display = ""

var sectColor = ['black']

var sectLength = document.getElementsByClassName("section").length

const colors = randomColor({count: sectLength-sectColor.length})

sectColor = sectColor.concat(colors)

sectColor[5] = 'black'
sectColor[6] = "#f46607"

new fullpage('#fullpage', {
  sectionsColor: sectColor,
})