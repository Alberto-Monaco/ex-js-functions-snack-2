//? Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e
// restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
	let contatore = 0
	return () => {
		setInterval(() => {
			contatore++
			console.log(contatore)
		}, intervallo)
	}
}

const conta1s = creaContatoreAutomatico(1000)
const conta2s = creaContatoreAutomatico(2000)
conta1s()
conta2s()
