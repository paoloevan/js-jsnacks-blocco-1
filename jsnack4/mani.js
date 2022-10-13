/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

//creo la lista degli invitati
const guestList = [
    'pippo',
    'pluto',
    'pinco',
    'pallo'
];


//chiedo il nume all'utente
const userName = prompt('Come ti chiami?')

//confronto il nome dell'utente con la lista
//se lo trovo tra la lista, interrompo il ciclo

let i = 0;
let resultEl = 0;

while (i < guestList.length) {
    if (userName == guestList[i]){
        resultEl = 1
    }
    
    i++;
}
if (resultEl >= 1) {
    console.log('puoi entrare');
} else {
    console.log('non puoi entrare');
}