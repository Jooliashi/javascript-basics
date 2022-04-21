function isPrime(num) {
  if (num <= 1) {
    return false;
  } 

  for (let current = 2; current < num; current++) {
    if (num % current === 0) return false
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false