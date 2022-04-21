/*
encoding:
  input: plain text, number of rails
  output: encoded text
  rules: take the plain text,
    fill out the rails in zigzag
    form and output the encoded text
    only upperclase and space?
  data type: string, array
  algo:
    clean the string out of space 
    create an empty array with number of rails empty sub arrays
    iterate through the string as number of times of the rails
      take the time as its starting index for its row
      take char at that index and add to row at x times
      add num of rails + 1 to the index 
      keep going until running out of char
*/

// eslint-disable-next-line max-lines-per-function
function encoding(str, num) {
  let message = str.replace(/ /g, '');
  let rail = [];
  for (let i = 0; i < num; i += 1) {
    rail.push([]);
  }
  let railRow = 0;
  let start = 'increase';
  for (let i = 0; i < message.length; i += 1) {
    rail[railRow].push(message[i]);
    for (let rest = 0; rest < rail.length; rest += 1) {
      if (rest !== railRow) {
        rail[rest].push('.');
      }
    }
    if (railRow === num - 1) {
      start = "decrease";
    } else if (railRow === 0) {
      start = "increase";
    }
    railRow += start === 'increase' ? 1 : -1;
  };

  return rail.map(row => row.join('')).join('\n')
}

console.log(encoding('WE ARE DISCOVERED FLEE AT ONCE', 3))