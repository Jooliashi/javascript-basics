rlSync = require('readline-sync');

let integer = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
let op = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product. ");

let result;
switch (op.toLowerCase()) {
  case 's':
    result = sum(integer);
    break;
  case 'p':
    result = product(integer);
    break;
}

if (op === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${result}.`);
} else if (op === 'p') {
  console.log(`The product of integers between 1 and ${integer} is ${result}.`);
} else {
  console.log("oops, don't know this operation...");
}

function sum(num) {
  let currentSum = 0;
  for (let start = 1; start <= num; start++) {
    currentSum += start;
  }
  return currentSum;
}

function product(num) {
  let currentProduct = 1;
  for (let start = 1; start <= num; start++) {
    currentProduct *= start;
  }
  return currentProduct;
}


