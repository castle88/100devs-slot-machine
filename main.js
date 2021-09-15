const reel = ['💎','💰','🪙','💸','👑']

const diceRoll = ()=> Math.floor(Math.random()* 5)

const display1 = document.querySelector('#display1')
const display2 = document.querySelector('#display2')
const display3 = document.querySelector('#display3')

const bankRoll = document.querySelector('#infoBank')
const betMore = document.querySelector('#infoWagAdd')
const betLess = document.querySelector('#infoWagDec')
const winnings = document.querySelector('#infoWin')
const wagerTotal = document.querySelector('#betTotal')
const winHeading = document.querySelector('#winner')
const bustHeading = document.querySelector('#bust')

const leverAction = document.querySelector('#leverAction')

let wager = 0
let bankRollAmount = 100

bankRoll.innerText = bankRollAmount

display1.innerText = reel[diceRoll()]
display2.innerText = reel[diceRoll()]
display3.innerText = reel[diceRoll()]

function play(){
	winnings.innerText = ''
	winHeading.innerText = ''
	bustHeading.innerText = ''
	display1.innerText = reel[diceRoll()]
	display2.innerText = reel[diceRoll()]
	display3.innerText = reel[diceRoll()]
	if(wager > 0){
		if(display1.innerText === display2.innerText && display1.innerText === display3.innerText){
			payOut(wager)
		}else{
			bustChecker()
		}
	}else{
		bustHeading.innerText = 'gotta wager something'
	}
	wager = 0
	wagerTotal.innerText = ''
}

function payOut(wagerAmount){
	winHeading.innerText = 'WINNER!'
	bankRollAmount += wagerAmount * 1.5
	bankRoll.innerText = bankRollAmount
	winnings.innerText = wagerAmount * 1.5
	return wagerAmount * 1.5
}

function increaseBet(){
	if(bankRollAmount >= 10){
		wager += 10
		bankRollAmount -= 10
		bankRoll.innerText = bankRollAmount
		wagerTotal.innerText = wager
	}else{
		bustHeading.innerText = 'cant bet what you dont have'
	}
}

function decreaseBet(){
	if(wager > 0){
		wager -= 10
		bankRollAmount += 10
		bankRoll.innerText = bankRollAmount
		wagerTotal.innerText = wager
	}else{
		bustHeading.innerText = 'gotta pay to play'
	}
}

function bustChecker(){
	if(bankRollAmount < 10){
		bustHeading.innerText = 'you busted, better luck next time'
	}
}

leverAction.addEventListener('click', play)
betMore.addEventListener('click', increaseBet)
betLess.addEventListener('click', decreaseBet)