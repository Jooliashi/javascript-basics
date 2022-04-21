function greeting(sentence) {
  let rlSync = require('readline-sync');
  let answer = rlSync.question(sentence);
  return answer;
}

let firstName = greeting('What is your first name? ')
let lastName = greeting('What is your last name? ')
console.log(`Hello,${firstName} ${lastName}!`)
