/*
input: integer
output: integer
  rules: find the next featured number 
    it should be odd, multiple of 7 and no repeating digits
    if error returns error message (there is a largest possible number)

*/

function featured(int) {
  let currentUnit= Math.floor(int / 7) + 1;
  while (currentUnit * 7 <= 9876543201) {
    if ((currentUnit * 7) % 2 === 1 && noRepeatedNumber(currentUnit * 7)) {
      break;
    }
    currentUnit += 1;
  }

  if ((currentUnit * 7) % 2 === 1) {
    return currentUnit * 7;
  } else {
    return 'There is no possible number that fulfills those requirements';
  }
}

function noRepeatedNumber(num) {
  let seen = {};
  let str = String(num);
  for (let i = 0; i < str.length; i += 1) {
    if (seen[str[i]]) {
      return false;
    } else {
      seen[str[i]] = true;
    }
  }
  return true;
}
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."