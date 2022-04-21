function swapCase(str) {
  return str.split('').map(char => {
    if (char.match(/[A-Z]/)) {
      return char.toLowerCase();
    } else if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}
console.log(swapCase('CamelCase'));;              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));;      // "tONIGHT ON xyz-tv"