//? Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// Funzione dichiarativa che somma due numeri
function somma(a, b) {
	return a + b
}

console.log(somma(2, 3)) // Output: 5

// Funzione anonima assegnata a una variabile
const somma2 = function (a, b) {
	return a + b
}

console.log(somma2(7, 10)) // Output: 17

// Arrow function che somma due numeri
const somma3 = (a, b) => a + b

console.log(somma3(5, 5)) // Output: 10
