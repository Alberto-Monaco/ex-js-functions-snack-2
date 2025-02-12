//? Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e
// restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(time) {
	return function () {
		setTimeout(() => {
			console.log('Tempo scaduto!')
		}, time)
	}
}

const timer1000 = creaTimer(1000)
timer1000()
