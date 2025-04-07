//? Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.
// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

// Funzione che esegue un messaggio a intervalli e si ferma dopo un tempo prestabilito
function eseguiEferma(messaggio, tempoStart, tempoStop) {
	// Avvia un timer che stampa il messaggio ogni tempoStart millisecondi
	let timer = setInterval(() => {
		console.log(messaggio)
	}, tempoStart)

	// Dopo tempoStop millisecondi, ferma il timer
	setTimeout(() => {
		clearInterval(timer)
		console.log('Timer fermato')
	}, tempoStop)
}

// Esempio: stampa "Ciao" ogni secondo per 5 secondi
eseguiEferma('Ciao', 1000, 5000)
