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

const sottrazione = (a, b) => a - b
const divisione = (a, b) => a / b

const eseguiOperazione = (a, b, operazione) => operazione(a, b)
console.log(eseguiOperazione(3, 4, sottrazione)) // -1
console.log(eseguiOperazione(3, 4, divisione)) // 0.75
