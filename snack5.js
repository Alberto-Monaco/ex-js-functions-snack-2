//? Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(message) {
	// Utilizzo setInterval per eseguire una funzione ogni 1000ms (1 secondo)
	setInterval(() => {
		// Stampo il messaggio fornito nella console
		console.log(message)
	}, 1000)
}

stampaOgniSecondo('Hello World!')
