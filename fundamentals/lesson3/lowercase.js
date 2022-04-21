function toLowerCase(string) {
  let new_string = '';
  let ascii;
  for (let index = 0; index < string.length; index++) {
    if (string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90) {
      ascii = string.charCodeAt(index) + 32;
      new_string += String.fromCharCode(ascii);
    } else {
      new_string += string[index];
    }
  }
  return new_string;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"