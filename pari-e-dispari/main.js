'use strict'

//prompt pari o dispari per l'utente
let userChoice = prompt('Pari o dispari?');
let userChoiceFormatted = userChoice.toLowerCase();

//verifica della scelta pari o dispari
while (!(userChoiceFormatted == 'pari' || userChoiceFormatted == 'dispari')) {
    userChoice = prompt('Inserisci un valore valido: pari o dispari?');
    userChoiceFormatted = userChoice.toLowerCase();
    console.log(userChoiceFormatted);
}

//prompt numero utente
let userNumber = Number(prompt('Scegli un numero da 1 a 5'));

while (!(userNumber >= 1 && userNumber <= 5)) {
    userNumber = prompt('Inserisci un valore valido');
} console.log(`il tuo numero è ${userNumber}`);


// generazione numero casuale
function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}
const computerNumber = getRandomInt(5);
console.log(`il numero del pc è ${computerNumber}`);

// somma dei numeri
const sum = userNumber + computerNumber
console.log(`la somma è ${sum}`)

const module = sum % 2;

//verifica della vittoria
function whoWon(odds, sumModule) {
    if (odds === 'pari' && sumModule === 0) {
        console.log('hai vinto!')
    } else if (odds === 'dispari' && sumModule === 1) {
        console.log('hai vinto!')
    } else {
        console.log('hai perso')
    }
}

whoWon(userChoice, module);


// switch (userChoiceFormatted) {
//     case "pari":
//         userChoice = 'pari'
//         console.log(userChoice);
//         break;
//     case "dispari":
//         userChoice = 'dispari'
//         console.log(userChoice);
//         break;
//     default:
//         userChoice = prompt('Inserisci un valore valido: pari o dispari?');
//         break;
// }