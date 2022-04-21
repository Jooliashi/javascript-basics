function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

function isPalindrome(str) {
  return str.split('').reverse().join('') === str
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true