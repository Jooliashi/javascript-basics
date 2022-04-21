function indexOf(firstString, secondString) {
  str_length = secondString.length;
  for (let start = 0; start <= firstString.length - str_length; start++) {
    if (firstString[start] !== secondString[0]) continue;
    if (str_length === 1) return start;
    for (let word_start = 1; word_start < str_length; word_start++) {
      if (firstString[start + word_start] !== secondString[word_start]) break;
      if (word_start === str_length - 1) return start;
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  str_length = secondString.length;
  // console.log(firstString.length - 1)
  // console.log(str_length)
  for (let start = firstString.length - 1; start >= firstString.length - str_length; start--) {
    if (firstString[start] !== secondString[str_length - 1]) continue;
    if (str_length === 1) return start;
    for (let word_start = 1; word_start < str_length; word_start++) {
      if (firstString[start - word_start] !== secondString[str_length - 1 - word_start]) break;
      if (word_start === str_length - 1) return start - str_length + 1;
    }
  }
  return -1;
}
// console.log(indexOf('Some strings', 's'));
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1