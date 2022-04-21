let rlSync = require('readline-sync');
const PASSWORD = 'password'
let count = 1
let answer;
do {
  answer = rlSync.question('What is the password: ');
  count += 1;
} while (answer != PASSWORD && count < 4)

if (answer === PASSWORD) {
  console.log('You have successfully logged in.')
} else {
  console.log('You have been denied access.')
}