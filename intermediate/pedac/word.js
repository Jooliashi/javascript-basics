/*
input: string
output: string
rules: replace number word with actual number
test cases:
  numbers are replaced with rest of the sentence stays the same
algorithm:
  declare an array with all the number words matching its index - 1
  iterate through the array
    replace each element in the string with its index instead 
  return replaced string
*/

// function wordToDigit(str) {
//   const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
//   let nums = numberWords.join('|');
//   let reg = new RegExp('\\b(' + nums + ')\\b', 'gi');
//   let sentence = str.replace(reg, toDigit);
//   return sentence;
// }

// function toDigit(word) {
//   return ['zero', 'one', 'two', 'three',
//   'four', 'five', 'six', 'seven',
//   'eight', 'nine'].indexOf(word.toLowerCase());
// }

const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  return string.replace(/[a-z]+/g, match => {
    return words.includes(match) ? words.indexOf(match) : match;
  })
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));