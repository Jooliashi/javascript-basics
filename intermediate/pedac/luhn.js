/*
input: a string
output: boolean
rules:
  take the input string and ignore the non-numeric characters
  verify rest of the numbers according to the Luhn formula
  returns true/false if the ending number ends in 0
test cases:
  luhnCheck('1111') //false
  luhnCheck('8763') //true
  luhnCheck('87  63') // true
  luhnCheck('-8-7- 63') // true
  luhnCheck('2005 7766 3554') // true
edges cases:
  luhnCheck('') //false
  luhnCheck('hi')//false
data type:
  string and boolean
  array
algorithm:
  first clean the string to just numbers
  if string is empty return false
  split the string by character
    and reverse it (into a new array) and map ele into number
  declare a array variable []
  iterate through the reversed array
    if index is at even number, add the element to new array
    if index at odd, double the number
      number is >= 10 subtract 9, append the result to new array
      append number to new array
  reduce the new array to a total sum
  verify if sum ending in 0 and return a boolean
*/

function luhnCheck(str) {
  let numberStr = str.replace(/\D/g, '');
  if (numberStr.length === 0) return false;
  let numberArr = numberStr.split('').reverse().map(ele => Number(ele));
  let sumArr = [];
  numberArr.forEach((num, idx) => {
    if (idx % 2 === 0) {
      sumArr.push(num);
    } else {
      num * 2 >= 10 ? sumArr.push(num * 2 - 9) : sumArr.push(num * 2);
    }
  });

  let sum = String(sumArr.reduce((sum, ele) => ele + sum));
  return sum;
}

function checkDigit(str) {
  let sum = luhnCheck(str + '0');
  let digit = String(Math.round(Number(sum) / 10) * 10 - Number(sum));
  return str + digit;
}

// console.log(luhnCheck('1111')); //false
// console.log(luhnCheck('8763')); //true
// console.log(luhnCheck('87  63')); // true
// console.log(luhnCheck('-8-7- 63')); // true
// console.log(luhnCheck('2323 2005 7766 3554')); // true
// console.log(luhnCheck('')); //false
// console.log(luhnCheck('hi'));//false

console.log(checkDigit('2323 2005 7766 355'))