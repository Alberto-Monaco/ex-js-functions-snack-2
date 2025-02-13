//? Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma(a, b) {
	return a + b
}

console.log(somma(2, 3))

const somma2 = function (a, b) {
	return a + b
}

console.log(somma2(7, 10))

const somma3 = (a, b) => a + b

console.log(somma3(5, 5))
