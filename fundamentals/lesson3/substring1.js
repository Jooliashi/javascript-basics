function substr(string, start, length) {
  let new_string =''
  firstIndex = start < 0 ? string.length + start : start;
  for (let index = firstIndex; index < firstIndex + length; index++) {
    if (index > string.length - 1) break;
    new_string += string[index];
  }
  return new_string;
}
let string = 'helloe world';
console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
