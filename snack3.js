//? Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

// Esempio d’uso:
// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a * b;
// ​
// const eseguiOperazione = (a, b, operazione) => operazione(a, b);
// ​
// console.log(eseguiOperazione(3, 4, somma)); // 7
// console.log(eseguiOperazione(3, 4, moltiplica)); // 12

// Definisco le funzioni di sottrazione e divisione come arrow functions
const sottrazione = (a, b) => a - b // Restituisce la differenza tra a e b
const divisione = (a, b) => a / b // Restituisce il quoziente tra a e b

// Funzione principale che accetta due numeri e una funzione come parametri
const eseguiOperazione = (a, b, operazione) => operazione(a, b)

// Test della funzione con sottrazione
console.log(eseguiOperazione(3, 4, sottrazione)) // -1

// Test della funzione con divisione
console.log(eseguiOperazione(3, 4, divisione)) // 0.75
