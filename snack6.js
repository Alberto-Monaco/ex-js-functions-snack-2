//? Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e
// restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
	// Inizializzo il contatore a 0
	let contatore = 0

	// Ritorno una funzione che avvia l'intervallo
	return () => {
		// Imposto l'intervallo che incrementa il contatore
		setInterval(() => {
			// Incremento il contatore
			contatore++
			// Stampo il valore del contatore
			console.log(contatore)
		}, intervallo)
	}
}

const conta1s = creaContatoreAutomatico(1000)
const conta2s = creaContatoreAutomatico(2000)
conta1s()
conta2s()
