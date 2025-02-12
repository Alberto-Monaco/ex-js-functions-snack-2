//? Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(message) {
	return function () {
		setInterval(() => {
			console.log(message)
		}, 1000)
	}
}

const printMessage = stampaOgniSecondo('Hello World!')
printMessage()
