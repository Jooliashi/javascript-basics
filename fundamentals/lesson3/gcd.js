function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

console.log(gcd(4, 12));   
console.log(gcd(10, 15));  
console.log(gcd(9, 2));   