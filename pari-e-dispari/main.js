'use strict'

//prompt per l'utente
let userChoice = prompt('Pari o dispari?');
let userChoiceFormatted = userChoice.toLowerCase();

//verifica della scelta pari o dispari
switch (userChoiceFormatted) {
    case "pari":
        userChoice = 'pari'
        break;
    case "dispari":
        userChoice = 'dispari'
        break;
    default:
        userChoice = prompt('Inserisci un valore valido: pari o dispari?');
        break;
}

const userNumber = Number(prompt('Scegli un numero da 1 a 5'));