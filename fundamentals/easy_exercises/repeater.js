// function repeater(str) {
//   let new_str = '';
//   for (let i = 0; i < str.length; i++) {
//     new_str += str[i];
//     new_str += str[i];
//   }
//   return new_str;
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

function doubleConsonants(str) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let new_str = '';
  for (let i = 0; i < str.length; i++) {
    if (VOWELS.includes(str[i]) || str[i].match(/[^A-Za-z]/)) {
      new_str += str[i];
    } else {
      new_str += str[i];
      new_str += str[i];
    }
  }
  return new_str;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""