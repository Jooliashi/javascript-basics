/*
input: string
output: a string of just 10 numbers
rules:
  take a user input string
  extract out all the special characters and only return the phone number
general cases:
  should include 10 digits plus random non digit character
  processPhoneNumber('1234567890') // '1234567890'
  processPhoneNumber('123-456-7890') // '1234567890'
  processPhoneNumber('123.456-7890') // '1234567890'
  processPhoneNumber('-1234-5678-90') // '1234567890'
edge cases:
  less 10 digits - a bad number - string of 10 zeros
  11 digits and first number is 1 - ignore the 1
  11 digits first number not 1 - string of 10 zeros
  more than 11 digits - string of 10 zeros
  input validation
  processPhoneNumber(1234) // '0000000000'
  processPhoneNumber('fjwioejf') // '0000000000'
  processPhoneNumber("") // '0000000000'
  processPhoneNumber('11234567890') // '0000000000'
  processPhoneNumber('01234567890') // '0000000000'
  processPhoneNumber('32111234567890') // '0000000000'

data type:
  input and outputs are strings
  array
Algorithm:
  take the input and turn it into array by splitting each character
  filter the array to take only digits
    verify the length of the digit array
    if it's 11
      verify the first digit ? starts with 1 then good number else bad number
    if it's 10 
      return the digits joined back as a string
*/

function processPhoneNumber(str) {
  if (typeof(str) !== 'string') return '0000000000';
  let numbers = str.split('');
  let digitsOnly = numbers.filter(char => char.match(/[0-9]/));
  let result;
  if (digitsOnly.length === 11) {
    result = digitsOnly[0] === '1' ? digitsOnly.slice(1) : undefined
  } else if (digitsOnly.length === 10) {
    result = digitsOnly;
  }

  return result === undefined ? '0000000000' : result.join('');
}

console.log(processPhoneNumber('1234567890')); // '1234567890'
console.log(processPhoneNumber('123-456-7890')); // '1234567890'
console.log(processPhoneNumber('123.456-7890')); // '1234567890'
console.log(processPhoneNumber('-1234-5678-90')); // '1234567890'
console.log(processPhoneNumber(1234)); // '0000000000'
console.log(processPhoneNumber('fjwioejf')); // '0000000000'
console.log(processPhoneNumber("")); // '0000000000'
console.log(processPhoneNumber('11234   567890')); // '1234567890'
console.log(processPhoneNumber('01234567890')); // '0000000000'
console.log(processPhoneNumber('32111234567890')); // '0000000000'
