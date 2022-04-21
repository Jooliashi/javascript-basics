function multiply() {
  let rlSync = require('readline-sync');
  let firstNumber = rlSync.question('Enter the first number: ');
  let secondNumber = rlSync.question('Enter the second number: ');
  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
}

multiply()
