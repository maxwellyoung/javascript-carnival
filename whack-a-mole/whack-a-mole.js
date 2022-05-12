// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
document.body.onload = moleAppears

console.log('Whack-a-Mole!')

//make an array of cells
let cellsArray = document.getElementsByTagName('td')

//add the mole
const mole = document.createElement('img')
mole.setAttribute('src', 'mole.PNG')
mole.style.width = '75px'

//add whack sound
const whack = document.createElement('audio')
whack.setAttribute('src', 'whack-audio.wav')

function playWhack() {
	whack.play()
}

//random cell from array function
function randomCell(array) {
	return array[Math.floor(Math.random() * array.length)]
}

//mole appears function
function moleAppears() {
	randomCell(cellsArray).appendChild(mole)
	mole.appendChild(whack)
}

//make click on mole for wherever he is
for (let i = 0; i < cellsArray.length; i++) {
	cellsArray[i].onclick = moleClick
}

//mole moves on click and audio plays
function moleClick(e) {
	let cell = e.target
	mole.addEventListener('click', function () {
		moleAppears()
		playWhack()
		console.log('click')
	})
}
