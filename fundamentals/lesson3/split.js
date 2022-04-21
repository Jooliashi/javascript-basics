function splitString(string, delimiter) {
  if (delimiter === undefined) return console.log("ERROR: no delimiter")
  let new_string = "";
  for (let start = 0; start < string.length; start++) {
    if (string[start] === delimiter) {
      if (start === string.length - 1) return console.log(new_string);
      new_string += "\n"
    } else if (delimiter === '') {
      if (start === string.length - 1) { 
        new_string += `${string[start]}`
      } else {
        new_string += `${string[start]}\n`
      }
    } else {
      new_string += string[start]
    }
  }
  console.log(new_string);
}

splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');

// function splitString(string, delimiter) {
//   if (delimiter === undefined) {
//     console.log('ERROR: No delimiter');
//     return;
//   }

//   let tempString = '';
//   for (let index = 0; index < string.length; index += 1) {
//     if (string[index] === delimiter) {
//       console.log(tempString);
//       tempString = '';
//     } else if (delimiter === '') {
//       console.log(string[index]);
//     } else {
//       tempString += string[index];
//     }
//   }
  
//   if (tempString) {
//     console.log(tempString);
//   }
// }