// function reverseSentence(str) {
//   return str.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

function reverseWords(str) {
  return str.split(' ').map( ele => {
    if (ele.length >= 5) {
      return ele.split('').reverse().join('');
    } else {
      return ele;
    }
  }).join(' ');
}
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"