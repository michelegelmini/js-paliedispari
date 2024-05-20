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
console.log(computerNumber);





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