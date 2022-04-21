function rot13(str) {
  const START_LOWERCASE_ASCII = 'a'.charCodeAt(0);
  const START_UPPERCASE_ASCII = 'A'.charCodeAt(0);

  let new_string = '';

  for (let index = 0; index < str.length; index++) {
    if (str[index].match(/[A-Za-z]/) !== null) {
      let start_ascii = str[index].match(/[a-z]/) !== null ? START_LOWERCASE_ASCII : START_UPPERCASE_ASCII
      let new_ascii = ((str[index].charCodeAt(0) + 13) - start_ascii) % 26 + start_ascii;
      new_string += String.fromCharCode(new_ascii);
    } else {
      new_string += str[index];
    }
  }

  return new_string;
}
