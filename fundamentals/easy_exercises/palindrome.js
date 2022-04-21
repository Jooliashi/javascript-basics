function isRealPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/, '').toLowerCase();
  return isPalindrome(str);
}
  
function isPalindrome(str) {
  return str.split('').reverse().join('') === str
}
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false