rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '))
let target = Number(rlSync.question('At what age would you like to retire? '))
let year = new Date().getFullYear();
let targetYear = target - age + year;

console.log(`It's ${year}. You will retire in ${targetYear}.`)
console.log(`You only have ${target - age} years to go!`)