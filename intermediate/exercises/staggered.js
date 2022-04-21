function staggeredCase(str) {
  let cap = false;
  return str.split('').map(char => {
    if (!char.match(/[a-z]/i)) {
      return char;
    } else if (cap === true) {
      cap = !cap;
      return char.toLowerCase();
    } else {
      cap = !cap;
      return char.toUpperCase();
    }
  }).join('');
}
console.log(staggeredCase('I Love Launch School!'));;        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));;                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));;   // "IgNoRe 77 ThE 4444 nUmBeRs"