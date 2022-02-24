// we need some event handlers to handle the events of clicking mouse eevent
// status to save the state of the game
// player change
// and some functions to change player and restart game
const player_x = 'x'
const Player_o = 'o'
//winning combination if any combination made then declare winner
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
