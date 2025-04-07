//? Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e
// restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

// Funzione che crea un timer personalizzato
function creaTimer(time) {
	// Restituisce una funzione (closure) che gestisce il timer
	return function () {
		// Imposta un timer che si attiva dopo il tempo specificato
		setTimeout(() => {
			// Stampa il messaggio quando il timer scade
			console.log('Tempo scaduto!')
		}, time)
	}
}

// Crea un timer che si attiva dopo 1000 millisecondi (1 secondo)
const timer1000 = creaTimer(1000)
// Avvia il timer
timer1000()
