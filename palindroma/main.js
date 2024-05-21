'use strict'

//chiedere all'utente una parola
const userWord = prompt('Inserisci una parola');
console.log(userWord);



//funzione per la verifica del palindromo

function isPalindrome(word) {
    var len = word.length;
    console.log(len);
    for (let i = 0; i < len / 2; i++) {
        if (word.charAt(i) !== word.charAt(len - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (isPalindrome(userWord)) {
    document.write(`La parola <strong>${userWord}</strong> è un palindromo! :) `);
} else {
    document.write(`La parola <strong>${userWord}</strong> NON è un palindromo! :( `);
}


