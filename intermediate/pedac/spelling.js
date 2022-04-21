/*
input:  a string (validate?)
output: boolean
rules:
  if the string uses both blocks from any block 
  or used any block twice return false
  otherwise return true
  each set can only be used once which means that one letter of each pair
  case insensitive
test cases:
  isBlockWord('BATCH');      // true
  isBlockWord('BUTCH');      // false
  isBlockWord('jest');       // true
  isBlockWord('JJ');   //false
  isBlockWord('JW');   //false
  isBlockWord('BuTTer') //false
  isBlockWord('BuTTEA') //false
  isBlockWord('ButtEA') //false

Data Type:
  string, boolean
  array
Algorithm:
  turn string into uppercase
  check if string has repeated letters
  check if string has both letters from any block
  if any of these returned true, return false
  otherwise return true
*/

function isBlockWord(str) {
  let upperStr = str.toUpperCase();
  if (repeatedLetter(str)) {
    return false;
  } else if (blockExists(upperStr)) {
    return false;
  }

  return true;
}

function repeatedLetter(str) {
  let seen = {};
  for (let i = 0; i < str.length; i += 1) {
    if (seen[str[i]]) {
      return true;
    } else {
      seen[str[i]] = true;
    }
  }
  return false;
}
function blockExists(str) {
  const blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  for (let i = 0; i < blocks.length; i += 1) {
    if ( str.match(blocks[i][0]) && str.match(blocks[i][1])) {
      return true;
    }
  }

  return false;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('JJ'));   //false
console.log(isBlockWord('JW'));   //false
console.log(isBlockWord('BuTTer')); //false
console.log(isBlockWord('BuTTEA')); //false
console.log(isBlockWord('ButtEA')); //false