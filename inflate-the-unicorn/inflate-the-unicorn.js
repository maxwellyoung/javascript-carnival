// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//sets up the unicorns
let unicorns = document.getElementsByClassName('inflate-an-image')
let images = [
	'images/unicorn-0.png',
	'images/unicorn-1.png',
	'images/unicorn-2.png',
	'images/unicorn-3.png',
]
let states = ['state1', 'state2', 'state3']
let balloonInflate = 0

//runs through all the unicorns
for (let i = 0; i < unicorns.length; i++) {
	unicorns[i].onclick = uniClick
}

//function handling clicks on unicorns
function uniClick(e) {
	//gives a variable of clicked unicorn
	let unicorn = e.target
	console.log('click')

	if (unicorn.id == 'uni-1') {
		balloonInflate++

		unicorn.src = 'images/unicorn-' + balloonInflate + '.png'
		console.log(unicorn)

		if (balloonInflate > 3) {
			balloonInflate = 0
			unicorn.src = 'images/unicorn-' + balloonInflate + '.png'
			alert('Unicorn 3 says thank you!')
		}
	}

	if (unicorn.id == 'uni-2') {
		balloonInflate++

		unicorn.src = 'images/unicorn-' + balloonInflate + '.png'
		console.log(unicorn)

		if (balloonInflate > 3) {
			balloonInflate = 0
			unicorn.src = 'images/unicorn-' + balloonInflate + '.png'
			alert('Unicorn 3 says thank you!')
		}
	}

	if (unicorn.id == 'uni-3') {
		balloonInflate++

		unicorn.src = 'images/unicorn-' + balloonInflate + '.png'
		console.log(unicorn)

		if (balloonInflate > 3) {
			balloonInflate = 0
			unicorn.src = 'images/unicorn-' + balloonInflate + '.png'
			alert('Unicorn 3 says thank you!')
		}
	}
}

//onclick function changes unicorn image in order
// if ((mySrc = images[0])) {
// 	unicorn.setAttribute('src', images[1])
// } else if ((mySrc = images[1])) {
// 	unicorn.setAttribute('src', images[2])
// } else if ((mySrc = images[2])) {
// 	unicorn.setAttribute('src', images[3])
// } else if ((mySrc = images[3])) {
// 	alert('ahh')
// }

// unicorn.src = images[step]
// step++
// if (unicorn.src <= images[4]) {
// 	alert('*explosion*')
// }

//could not figure out how to make this way work!
/*
	if (typeof images == 'undefined' || step == images.length) return
	unicorn.src = images[step]
	step++
  */
