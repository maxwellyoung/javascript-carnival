// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//get the head, body and shoes, give them variables
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

//set indexes for each part
let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let itemIndex = 0

//make function to change clown shoes next
function changeClownShoesNext() {
	shoesIndex++

	if (shoesIndex === 6) {
		shoesIndex = 0
	}
	let shoesSrc = 'images/shoes' + shoesIndex + '.png'
	shoes.src = shoesSrc
}

//make function to change clown shoes previous
function changeClownShoesPrevious() {
	shoesIndex--
	if (shoesIndex === -1) {
		shoesIndex = 5
	}
	let shoesSrc = 'images/shoes' + shoesIndex + '.png'
	shoes.src = shoesSrc
}

//make function to change clown body next
function changeClownBodyNext() {
	bodyIndex++
	if (bodyIndex === 6) {
		bodyIndex = 0
	}
	let bodySrc = 'images/body' + bodyIndex + '.png'
	body.src = bodySrc
}

//make function to change clown body previous
function changeClownBodyPrevious() {
	bodyIndex--

	if (bodyIndex === -1) {
		bodyIndex = 5
	}
	let bodySrc = 'images/body' + bodyIndex + '.png'
	body.src = bodySrc
}

//make function to change clown head next
function changeClownHeadNext() {
	headIndex++
	if (headIndex === 6) {
		headIndex = 0
	}
	let headSrc = 'images/head' + headIndex + '.png'
	head.src = headSrc
}

//make function to change clown head previous
function changeClownHeadPrevious() {
	headIndex--
	if (headIndex === -1) {
		headIndex = 5
	}
	let headSrc = 'images/head' + headIndex + '.png'
	head.src = headSrc
}

//make function to change to next item
function itemNext() {
	itemIndex++
	itemIndex %= 3
}

//make function to change to previous item
function itemPrevious() {
	itemIndex--
	if (itemIndex < 0) {
		itemIndex += 3
		itemIndex %= 3
	}
}

function next() {
	switch (itemIndex) {
		case 0:
			changeClownHeadNext()
			break

		case 1:
			changeClownBodyNext()
			break

		case 2:
		default:
			changeClownShoesNext()
	}
}

function previous() {
	switch (itemIndex) {
		case 0:
			changeClownHeadPrevious()
			break

		case 1:
			changeClownBodyPrevious()
			break

		case 2:
		default:
			changeClownShoesPrevious()
	}
}

//arrow keys to switch items
document.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowUp':
			itemPrevious()
			break
		case 'ArrowDown':
			itemNext()
			break
		case 'ArrowLeft':
			previous()
			break
		case 'ArrowRight':
			next()
			break
	}
})
