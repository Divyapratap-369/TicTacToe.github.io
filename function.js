// we need some event handlers to handle the events of clicking mouse eevent
// status to save the state of the game
// player change
// and some functions to change player and restart game
const player_x = 'x'
const player_o = 'circle'
const win_combinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')
let isplayer_o_Turn = false
startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
	isplayer_o_Turn = false
	cellElements.forEach(cell => {
		cell.classList.remove(player_x)
		cell.classList.remove(player_o)
		cell.removeEventListener('click', handleCellClick)
		cell.addEventListener('click', handleCellClick, { once: true })
	})
	setBoardHoverClass()
	winningMessageElement.classList.remove('show')
}
function handleCellClick(e) {
	const cell = e.target
	const currentClass = isplayer_o_Turn ? player_o : player_x
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBoardHoverClass()
	}
}
function endGame(draw){
	if(draw){
		winningMessageTextElement.innerText = "It's a draw!"
	}
	else{
		winningMessageTextElement.innerText = `player with ${isplayer_o_Turn?"O's":"x's"} wins`
	}
	winningMessageElement.classList.add(`show`)
}
function isDraw() {
	return [...cellElements].every(cell => {
		return cell.classList.contains(player_x) || cell.classList.contains(player_o)
	})
}
function placeMark(cell, currentClass) {
	cell.classList.add(currentClass)
}

function swapTurns() {
	isplayer_o_Turn = !isplayer_o_Turn
}
function setBoardHoverClass() {
	boardElement.classList.remove(player_x)
	boardElement.classList.remove(player_o)
	if (isplayer_o_Turn) {
		boardElement.classList.add(player_o)
	} else {
		boardElement.classList.add(player_o)
	}
}
function checkWin(currentClass) {
	return WINNING_COMBINATIONS.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass)
		})
	})
}

