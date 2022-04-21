function isPrime(num) {
  if (num <= 1) {
    return false;
  } 

  for (let current = 2; current < num; current++) {
    if (num % current === 0) return false
  }

  return true;
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let primes = [];

  for (let num = 2; num < expectedSum - 1; num++) {
    if (isPrime(num)) primes.push(num) ;
  }

  let pairs = [];

  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      if (i === j) continue
      pairs.push([primes[i], primes[j]]);
    }
  }

  return pairs.forEach(pair => {
    if (sum(pair) === expectedSum) console.log(pair);
  })
}

checkGoldbach(12);
checkGoldbach(100);

// function checkGoldbach(expectedSum) {
//   if (expectedSum < 4 || expectedSum % 2 === 1) {
//     console.log(null);
//     return;
//   }

//   let num1 = 1;
//   let num2;

//   do {
//     num1 += 1;
//     num2 = expectedSum - num1;
//     if ((isPrime(num1)) && isPrime(num2)) {
//       console.log(num1, num2);
//     }
//   } while (num1 !== num2);
// };