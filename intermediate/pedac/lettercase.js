/*
input: string
output: object
rules:
  object contains: percentage of characters in the string that are lowercase
  percentage that are uppercase
  percentage that are neither
  string always contain at least one character
  character means everything(space, special characters)
  result, 2 decimal points
test cases:

data type: string
*/

function letterPercentages(str) {
  let count = {};
  let total = str.length;
  let lowercase = ( str.match(/[a-z]/g) || [] ).length;
  count.lowercase = (lowercase / total * 100).toFixed(2);
  let uppercase = ( str.match(/[A-Z]/g) || [] ).length;
  count.uppercase = (uppercase / total * 100).toFixed(2);
  let rest = total - lowercase - uppercase
  count.neither = (rest / total * 100).toFixed(2);
  return count;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }