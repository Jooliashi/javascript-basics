function centerOf(str) {
  let startIndex = Math.floor(str.length / 2)
  if (str.length % 2 === 1) {
    return str[startIndex];
  }
  else {
    return str.slice(startIndex - 1, startIndex + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'))            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"