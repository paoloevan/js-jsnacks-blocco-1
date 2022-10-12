/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let totNumberEl;
let numberEl;

for (let i = 1; i < 11; i++) {
    numberEl = Number(prompt('Inserisci numero ' + i));
    totNumberEl += totNumberEl;
}
console.log(totNumberEl);