/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let totNumberEl = 0;
let numberEl;

for (let i = 1; i < 11; i++) {
    numberEl = Number(prompt('Inserisci numero ' + i));
    totNumberEl += numberEl;
}
console.log(totNumberEl);

/*
con While:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. 
*/

let totNumberElWhile = 0;
let numberElWhile;

let index = 1;
while (index < 11) {
    numberElWhile = Number(prompt('Inserisci numero ' + index));
    totNumberElWhile += numberElWhile;

    index++
}

console.log('con While', totNumberElWhile);