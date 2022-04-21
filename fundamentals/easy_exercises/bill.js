const rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));
let tipPercentage = Number(rlSync.question('What is the tip percentage? ')) * 0.01;

let tip = (bill * tipPercentage);
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(tip + bill).toFixed(2)}`);
