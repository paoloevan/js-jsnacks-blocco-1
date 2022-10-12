/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

const numberOne = Number(prompt('Inserire primo numero'));
const numberTwo = Number(prompt('Inserire secondo numero'));
let maggiore

if (numberOne > numberTwo) {
    maggiore = numberOne;
} else if (numberTwo > numberOne){
     {
        maggiore = numberTwo;
    }
} else {
    maggiore = 'Valori uguali'
}

console.log(maggiore);