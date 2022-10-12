/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const firstWorld = prompt('Inserisci prima parola')
const secondWorld = prompt('Inserisci seconda parola')

if (firstWorld.length > secondWorld.length) {
    console.log(secondWorld);
    console.log(firstWorld);
} else if (firstWorld.length < secondWorld.length) {
    console.log(firstWorld);
    console.log(secondWorld);
} else {
    console.log('le parole sono lunghe uguali');
}
