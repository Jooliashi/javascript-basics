let input = require('readline-sync');

let choice;
do {
  choice = input.question('What measurement do you have? (meter / feet); ');
  choice = choice.toLowerCase();
} while (choice !== 'feet' && choice !== 'meter')

console.log(`Enter the length of the room in ${choice}: `);
let length = input.prompt();
length = parseInt(length, 10);

console.log(`Enter the width of the room in ${choice}: `);
let width = input.prompt();
width = parseInt(width, 10);

const METER_TO_FEET = 10.7639;

let roomSize;
if (choice === 'meter') {
  roomSize = width * length;
} else {
  roomSize = width * length * METER_TO_FEET;
}

console.log(`The area of the room is ${roomSize.toFixed(2)} ${choice}`)
