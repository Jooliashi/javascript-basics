prompt = require('readline-sync');
let grade1 = Number(prompt.question('Enter score 1: '));
let grade2 = Number(prompt.question('Enter score 2: '));
let grade3 = Number(prompt.question('Enter score 3: '));

function average(score1, score2, score3) {
  return ((score1 + score2 + score3) / 3)
}

let ave = average(grade1, grade2, grade3);

let letter;
if (ave >= 90) {
  letter = 'A';
} else if (ave >= 70 && ave < 90) {
  letter = 'B';
} else if (ave >= 50 && ave < 70) {
  letter = 'C';
} else {ave = 'F'}

console.log(`Based on the average of your 3 scores your letter grade is "${letter}".`)