/*
iterate from number 1 up to the argument number
  verify if odd
  if odd, console log
  if not, pass
*/

function logOddNumbers(num) {
  for (let currentNumber = 1; currentNumber <= num; currentNumber += 2) {
    if (currentNumber % 2 === 0) continue
    console.log(currentNumber)   
  }
}

logOddNumbers(19);