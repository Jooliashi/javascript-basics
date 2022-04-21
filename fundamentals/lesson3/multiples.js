function logMultiples(num) {
  largestMultiple = Math.floor(100 / num) * num;
  for (let currentNumber = largestMultiple; currentNumber >= num; currentNumber -= num)
  if (currentNumber % 2 === 1) console.log(currentNumber)
}
logMultiples(17);
logMultiples(21);