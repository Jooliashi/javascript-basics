const rlSync = require('readline-sync');

let phrase = String(rlSync.question('Please enter a phrase: '));
let inputMod = phrase.replace(/[^a-z]/gi, '');

let count = inputMod.length;

console.log(`There are ${count} characters in "${phrase}".`);
