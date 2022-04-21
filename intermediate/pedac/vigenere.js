/*
input: string for text to encrypt and string for keyword
output: a string
rules:
  each letter of keyword is treated as shift value, cases are insentitive
  only alphebets are encrypted
test cases:
  vigenereEncrypt("Pineapples don't go on pizzas!", 'meat') //Bmnxmtpeqw dhz'x gh ar pbldal!
  vigenereEncrypt("Pineapples", 'Meat') //Bmnxmtpeqw
  vigenereEncrypt("pineapples", 'meat') //bmnxmtpeqw
  vigenereEncrypt("pi  n!!eapples", 'meat') //bm  n!!xmtpeqw
algorithm:
  lowercase the keyword
  split the original string into each char as an array
  declare a new result array
  declare a count variable to track keyword index position - 0
  map through each char
    if it's not alphabet, return original char
    if alphabet, encrypt(char, keyword[count])
      increment count by 1 if count is smaller than keyword length
      otherwise reset count to 0
  join the array, and return it

  Encrypt: 
    const lowercase = 'a..z'
    const uppercase = 'A..Z'
    shift value is index position of the keyword char in lowercase
    find index value of char in either lowercase or uppercase
      add shift value ot index and get the remainder of it over 26
    use the remainder to find the matching char in its respective case
    return
*/

function vigenereEncrypt(text, keyword) {
  let keyLowerCase = keyword.toLowerCase();
  let arr = text.split('');
  let count = 0;
  let result;
  result = arr.map(char => {
    if (char.match(/[a-z]/i)) {
      char = encrypt(char, keyLowerCase[count]);
      count = count < keyword.length - 1 ? count + 1 : 0;
    }
    return char;
  });
  return result.join('');
}

function encrypt(char, shift) {
  const lowerCases = 'abcdefghijklmnopqrstuvwxyz';
  const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let value = lowerCases.indexOf(shift);
  let cases = char.match(/[a-z]/) ? lowerCases : upperCases;
  return cases[(cases.indexOf(char) + value) % 26];
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat')); //Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt("Pineapples", 'Meat')); //Bmnxmtpeqw
console.log(vigenereEncrypt("pineapples", 'meat')); //bmnxmtpeqw
console.log(vigenereEncrypt("pi  n!!eapples", 'meat')); //bm  n!!xmtpeqw