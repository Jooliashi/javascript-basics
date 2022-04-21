function repeatedCharacters(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  for (let c in count) {
    if (count[c] < 2) {
      delete count[c]
    }
  }
  return count;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }